import TextField from '@mui/material/TextField'

export const drones = [
  {index: 1, location: 'Station 1', name: 'DJI Phantom 4', id: '-----------', status: 'Rest'},
  {index: 2, location: 'Station 1', name: 'DJI Phantom 4', id: '-----------', status: 'In mission'}
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
      
    </div>
  )
}

export default DroneLiveFeed