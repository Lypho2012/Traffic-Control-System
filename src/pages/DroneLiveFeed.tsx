import TextField from '@mui/material/TextField'

function DroneLiveFeed() {
  const drones = [
    {index: 1, location: 'Station 1', name: 'DJI Phantom 4', id: '-----------'},
    {index: 2, location: 'Station 1', name: 'DJI Phantom 4', id: '-----------'}
  ]

  return (
    <div id="dronelivefeed">
      {/* List of Drones */}
      <TextField
          id="dronelivefeed_searchbar"
          variant="outlined"
          label="Search"
      />
      <div className='dronelivefeed_dronelist'>
        {drones.map((item) => {return <div>
          {/*<img src="public/assets/dji-phantom4.jpeg" className='drone_image'></img>*/}
          <p>{item.id}</p>
        </div>;})}
      </div>
    </div>
  )
}

export default DroneLiveFeed