import { Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/Sidebar.css'
import Map from './pages/Map'
import Sidebar from './pages/Sidebar'
import DroneManagement from './pages/DroneManagement'

function App() {

  return (
    <>
    {/** Sidebar */}
    <Sidebar/>

    {/** Routes */}
    <Routes>
      <Route path="/" element={<Map/>}></Route>
      <Route path="/drone-management" element={<DroneManagement/>}></Route>
    </Routes>
    </>
  )
}

export default App
