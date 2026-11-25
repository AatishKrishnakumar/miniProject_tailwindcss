
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AddMobile from './pages/AddMobile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addmobile' element={<AddMobile/>}/>
      </Routes>
    </>
  )
}

export default App
