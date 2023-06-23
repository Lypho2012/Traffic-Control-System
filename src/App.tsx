import { Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/Sidebar.css'
import './pages/Header.css'
import Map from './pages/Map'
import Sidebar from './pages/Sidebar'
import DroneManagement from './pages/DroneManagement'
import Header from './pages/Header'

function App() {

  return (
    <>
    <div id="navigational-components">
      {/** Header */}
      <Header/>
      
      {/** Sidebar */}
      <Sidebar/>
    </div>

    {/** Routes */}
    <Routes>
      <Route path="/" element={<Map/>}></Route>
      <Route path="/drone-management" element={<DroneManagement/>}></Route>
    </Routes>
    </>
  )
}

export default App
