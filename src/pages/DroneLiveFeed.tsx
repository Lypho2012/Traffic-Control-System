import TextField from '@mui/material/TextField'
import DroneLiveFeedDroneList from './DroneLiveFeedComponents/DroneLiveFeedDroneList'
import { Route, Routes } from 'react-router-dom'
import DroneLiveFeedVideo from './DroneLiveFeedComponents/DroneLiveFeedVideo'

export const drones = [
  {index: 1, location: 'Station 1', name: 'DJI Phantom 4', id: '1', status: 'Rest'},
  {index: 2, location: 'Station 1', name: 'DJI Phantom 4', id: '2', status: 'In mission'}
]

function DroneLiveFeed() {
  
  return (
    <div id="dronelivefeed">
      
      {/* List of Drones */}
      <TextField
          id="dronelivefeed_searchbar"
          variant="outlined"
          label="Search"
      />
      <div className='horizontal'>
        <DroneLiveFeedDroneList/>
        <DroneLiveFeedVideo/>
      </div>
      
      
    </div>
  )
}

export default DroneLiveFeed