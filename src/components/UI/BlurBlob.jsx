import React from 'react'

import propTypes from 'prop-types'

const BlurBlob = ({ position, size }) => {

  const { top, left } = position;
  const { width, height } = size;

  return (
    <div className='absolute'
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50% , -50%)",
      }}
    >

      <div className='bg-purple-500 w-full h-full  rounded-full opacity-20 blur-3xl animate-pulse          ' >

      </div>


    </div>
  )
}

BlurBlob.propTypes = {
  position : propTypes.shape({
    top : propTypes.string ,
    left : propTypes.string
  })
}

export default BlurBlob