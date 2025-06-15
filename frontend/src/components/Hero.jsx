
import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="hero flex item item-center justify-between px-[100px] " style={{height : "calc(100vh - 100px)"}}>
            <div className="left w-[50%] flex text-center items-center flex-col justify-center">
                <div>
                    <h3 className='text-[60px]' style={{lineHeight:1}} >unlock the secrets to  <span className='sp-text'>Masterful </span> blogs here.</h3>
                </div>
                <div className='flex items-center gap-[50px] mt-[50px]'>
                    <button className='btnnormal'>Get Started</button>
                    <button className='btnnormal'>Learn More</button>
                </div>
            </div>

            <div className="right flex justify-center items-center">
                <img className='rounded-[20px] w-[90%] h-[60%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k55b_10-2H5WeW-x8Enfr33LaJhh5hNalg&s" alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero
