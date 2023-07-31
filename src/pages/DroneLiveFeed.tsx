import TextField from '@mui/material/TextField'

function DroneLiveFeed() {
  const drones = [
    {index: 1, location: 'Station 1', name: 'DJI Phantom 4', id: '-----------', status: 'Rest'},
    {index: 2, location: 'Station 1', name: 'DJI Phantom 4', id: '-----------', status: 'In mission'}
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
        {drones.map((item) => {return <button className='dronelivefeed_dronelist_item'>
        <div className="dronelivefeed_dronelist_item_status"></div>
          {item.status == 'rest' ? (<div className="dronelivefeed_dronelist_item_status"></div>) 
          : (<div className="dronelivefeed_dronelist_item_status"></div>)}
          <p>{item.index}</p>
          <img src="public/assets/dji-phantom4.jpeg" className='drone_image'></img>
          <div>
            <p>{item.name}</p>
            <p>ID: {item.id}</p>
            <p>Current location: {item.location}</p>
          </div>
        </button>;})}
      </div>
    </div>
  )
}

export default DroneLiveFeed