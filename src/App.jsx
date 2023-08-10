import { useState } from 'react'
import FormSection from './components/form/formSection'
import Table from './components/table/table'

function App() {
  const [formData, setFormData] = useState([])

  const getFormData =(data)=>{
    setFormData([].concat(data, formData))
  }

  return (
    <div style={{width:'70%', margin:'50px auto', backgroundColor:'#ddd', padding:'30px' }}>
      <FormSection getFormData={getFormData} />
      <Table data={formData} />
    </div>
  )
}

export default App
