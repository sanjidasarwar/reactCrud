import { useState } from 'react'
import FormSection from './components/form/formSection'

function App() {
  const [data, setData] = useState({})

  const handleDataStore =(data)=>{
      setData(data)
      console.log(data);
  }

  return (
    <div style={{width:'70%', margin:'50px auto', backgroundColor:'#ddd', padding:'30px' }}>
      <FormSection handleDataStore={handleDataStore} />
    </div>
  )
}

export default App
