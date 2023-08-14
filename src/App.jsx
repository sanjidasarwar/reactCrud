import { useState } from 'react'
import FormSection from './components/form/formSection'
import Table from './components/table/table'

function App() {
  const [formData, setFormData] = useState([])
  const [editData, setEditData] =useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const getFormData =(data)=>{
    setFormData([].concat(data, formData))
  }
  const handleEdit =(data) =>{
    setEditData(data)
    setIsEditing(true)
 }

  const handleEditSubmit = (editedData) => {
    console.log(editedData);

    // // Find the index of the edited item in the formData array
    const editedItemIndex = formData.findIndex(item => item.id === editedData.id);

    if (editedItemIndex !== -1) {
      formData.splice(editedItemIndex, 1, editedData)
    }

    setEditData(null);
    setIsEditing(false);
  };


  const handleClearAll =() =>{
    setFormData([]);
  }

  const handleDelete =(id) =>{
    let newFormData= formData.filter(data => data.id !== id)
    setFormData(newFormData)
  }


  return (
    <div style={{width:'70%', margin:'50px auto', backgroundColor:'#ddd', padding:'30px' }}>
      <FormSection getFormData={getFormData} editData ={editData} isEditing={isEditing} handleEditSubmit={handleEditSubmit} />
      {/* <div>
        <label>Filter:</label>
        <input type="text" name="" id="" value="" onChange={handleFilter} />
      </div> */}

      <div>
         <button onClick={handleClearAll}>Clear All</button>
      </div>
      
      <Table data={formData} handleDelete ={handleDelete} handleEdit={handleEdit} />
    </div>
  )
}

export default App
