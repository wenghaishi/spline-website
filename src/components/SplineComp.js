import React from 'react'
import './SplineComp.css'
import Spline from '@splinetool/react-spline';


function SplineComp() {
  return (
    <div className='main'>
        <Spline scene="https://prod.spline.design/0ZzrcM35v1FxQsv9/scene.splinecode" />
        <h1 className='text'>Hi I am Haishi(Sam), a frontend dev based in Singapore</h1>
        <div>
          <button className='button1'>About me</button>
          <button className='button2'>Projects</button>
          <button className='button3'>Contact me</button>
        </div>

    </div>
  )
}

export default SplineComp

