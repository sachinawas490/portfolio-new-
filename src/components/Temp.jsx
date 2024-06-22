import React from 'react'

function Temp(prop) {
    console.log(prop.image)
  return (
    <div>
      <img src={prop.image} alt="" className='h-[200px]' />
    </div>
  )
}

export default Temp
