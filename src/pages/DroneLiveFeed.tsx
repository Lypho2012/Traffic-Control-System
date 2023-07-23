import TextField from '@mui/material/TextField'
import React from 'react'

function DroneLiveFeed() {
  return (
    <div>
      {/* Searchbar */}
      <TextField
          id="dronelivefeed_searchbar"
          variant="outlined"
          label="Search"
        />
    </div>
  )
}

export default DroneLiveFeed