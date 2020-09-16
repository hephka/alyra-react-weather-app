// src/components/Weather/Temperature.js
import React from "react"

const Icon = ({ iconID }) => {
  return (
    !!iconID && (
      <img
        src={`http://openweathermap.org/img/wn/${iconID}@4x.png`}
        alt=""
        width="100"
        height="100"
      />
    )
  )
}

export default Icon