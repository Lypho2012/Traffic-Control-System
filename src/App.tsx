import { Route, Routes } from 'react-router-dom'
import './App.css'
import Map from './pages/Map'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Map/>}></Route>
      </Routes>
    </>
  )
}

export default App
