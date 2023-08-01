import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

function SatelliteMapViewAccidentPage() {
  let { pageId } = useParams();
  return (
    <div>
      <button>Back</button>
      <p></p>
    </div>
  )
}

export default SatelliteMapViewAccidentPage