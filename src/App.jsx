import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import ListEmloyeeComponents from './components/ListEmloyeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterCompanent from './components/FooterCompanent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeCompanent from './components/EmployeeCompanent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
       <HeaderComponent/>
       <Routes>
          <Route path='/' element={<ListEmloyeeComponents/>}></Route>
          <Route path='/employee'element={<ListEmloyeeComponents/>}></Route>
          <Route path='/add-employee' element={<EmployeeCompanent/>}></Route>
          <Route path='/edit-employee/:id' element={<EmployeeCompanent/>}></Route>
         
       </Routes>
       <FooterCompanent/>
   </BrowserRouter>
    </>
  )
}

export default App
