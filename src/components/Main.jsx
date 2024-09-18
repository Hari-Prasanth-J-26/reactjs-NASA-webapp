import React from 'react'

export default function Main(props) {
    const {data} = props
  return (
    <div className='imgContainer'>
        <img src={data ? data.hdurl : "galaxy.ipg"} alt={data.title || "M31 : The Andromeda galaxy"} className="bgImage"/>
    </div>
  )
}
