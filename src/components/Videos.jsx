import React from 'react'
import { Outlet } from 'react-router-dom'

function Videos() {
  return (
    <div>Videos
      <Outlet/>
    </div>
  )
}

export default Videos