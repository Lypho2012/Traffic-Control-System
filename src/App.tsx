import { Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/Sidebar.css'
import './pages/Header.css'
import './pages/SatelliteMapView.css'
import Map from './pages/SatelliteMapView'
import Sidebar from './pages/Sidebar'
import DroneManagement from './pages/DroneManagement'
import Header from './pages/Header'
import DroneLiveFeed from './pages/DroneLiveFeed'

function App() {

  return (
    <>
    {/** Header */}
    <Header/>
    
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
