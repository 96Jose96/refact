import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import employeesList from '../utils/users'
//import lodearriba from './top'
import './App.css'

function App() {
  
  return (
    <>
  {employeesList.map((employee, index) => (
    <div className='card' key={index}>
        <p>Nombre: {employee.name} {employee.lastName}</p>
        <p>Edad: {employee.age}</p>
        <p>Hobbies: {employee.hobbies.join(', ')}</p>
    </div>
    ))}
  </>
  );

  // const [count, setCount] = useState(0)
  // const [agrupar, sumarMas] = useState(1)
  // const [contabilizar, quitar] = useState(0)
  
}

export default App
