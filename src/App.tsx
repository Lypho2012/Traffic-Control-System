import { Route, Routes } from 'react-router-dom'
import './App.css'
import Map from './pages/Map'
import Sidebar from './pages/Sidebar'

function App() {

  return (
    <>
    {/** Sidebar */}
    <Sidebar/>

    {/** Routes */}
    <Routes>
      <Route path="/" element={<Map/>}></Route>
    </Routes>
    </>
  )
}

export default App
