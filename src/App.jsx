import { useState } from 'react'
import FormSection from './components/form/formSection'
import Table from './components/table/table'

function App() {
  const [formData, setFormData] = useState([])

  const getFormData =(data)=>{
    setFormData([].concat(data, formData))
  }

  const handleDelete =(id) =>{
    let newFormData= formData.filter(data => data.id !== id)
    setFormData(newFormData)
  }

  return (
    <div style={{width:'70%', margin:'50px auto', backgroundColor:'#ddd', padding:'30px' }}>
      <FormSection getFormData={getFormData} />
      {/* <div>
        <label>Filter:</label>
        <input type="text" name="" id="" value="" onChange={handleFilter} />
      </div> */}
      
      <Table data={formData} handleDelete ={handleDelete}/>
    </div>
  )
}

export default App
