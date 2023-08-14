import InputField from "./InputField";
import { formField } from "../../../data/data";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";


function mapObjectToArray (formField){
    return Object.keys(formField).map(key=> ({name:key,...formField[key]}))
}

function mapObject(formField){
    return Object.keys(formField).reduce((preVal, currVal)=>{
        preVal[currVal]={
            ...formField[currVal],
            value:''
        }
        return preVal
    },{})
}

function FormSection({getFormData, editData, isEditing, handleEditSubmit}) {

    const [formState, setFormState] = useState(mapObject(formField))
    const formData = mapObjectToArray(formState)
    
    useEffect(()=>{
        if (isEditing && editData) {
            const updatedFormState = mapObject(formField);
      
            for (const key in editData) {
              if (updatedFormState.hasOwnProperty(key)) {
                updatedFormState[key].value = editData[key];
              }
            }
      
            setFormState(updatedFormState);
          }

    },[editData, isEditing])

    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name] : {
                ...formState[e.target.name],
                value:e.target.value
            }
        } )
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        const values =Object.keys(formField).reduce((preVal, curVal)=>{
            preVal[curVal] =formState[curVal].value;
             return preVal;
        }, {})



        if (isEditing && editData) {
            console.log(editData);
            console.log(values);
             // Update the existing editData with new values
            const updatedEditData = { ...editData, ...values };
            handleEditSubmit(updatedEditData);
        } else {
            values.id = shortid.generate();
            getFormData(values);
        }
        setFormState(mapObject(formField))
    }


    return ( 
        <form onSubmit={handleSubmit}>
           {
            formData.map(field =>(
                <div key={field.id}>
                    <label htmlFor={field.id}>{field.name}</label>
                    {
                        field.type ==='select' ? (
                            <select name={field.name} id={field.id} onChange={handleChange}>
                            <option>Select a Option</option>
                                {
                                    field.options.map(option => (
                                         <option key={option.id} value={option.value} >{option.label}</option>             
                                    ))
                                }
                        </select>
                        ):(
                            <InputField type={field.type} name={field.name} value={field.value} handleChange={handleChange}/>
                        )
                    }
                </div>

            ))
           }
           
            <div>
                <input type="submit" value="Save" />
            </div>
        </form>
     );
}

FormSection.prototype = {
    getFormData:PropTypes.func.isRequired,
    handleEditSubmit:PropTypes.func.isRequired,
    editData:PropTypes.object.isRequired,
    isEditing:PropTypes.bool.isRequired,
}

export default FormSection;