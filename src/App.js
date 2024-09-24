import react from 'react'
import ButtonAppBar from './Components/Navbar'
import Details from './Pages/Details'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <ButtonAppBar/>
    <Outlet/>
    </>
  )
}

export default App
