import InputField from "./InputField";
import { formField } from "../../../data/data";
import { useState } from "react";
import PropTypes from 'prop-types';


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

function FormSection({getFormData}) {
    const [formState, setFormState] = useState(mapObject(formField))
    const formData = mapObjectToArray(formState)
    

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

        getFormData(values)
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
    getFormData:PropTypes.func.isRequired
}

export default FormSection;