
// import React from 'react'

// const Hero = () => {
//   return (
//     <>
//         <div className="hero flex item item-center justify-between px-[100px] " style={{height : "calc(100vh - 100px)"}}>
//             <div className="left w-[50%] flex text-center items-center flex-col justify-center">
//                 <div>
//                     <h3 className='text-[60px]' style={{lineHeight:1}} >unlock the secrets to  <span className='sp-text'>Masterful </span> blogs here.</h3>
//                 </div>
//                 <div className='flex items-center gap-[50px] mt-[50px]'>
//                     <button className='btnnormal'>Get Started</button>
//                     <button className='btnnormal'>Learn More</button>
//                 </div>
//             </div>

//             <div className="right flex justify-center items-center">
//                 <img className='rounded-[20px] w-[90%] h-[60%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k55b_10-2H5WeW-x8Enfr33LaJhh5hNalg&s" alt="" />
//             </div>
//         </div>
//     </>
//   )
// }

// export default Hero


import React from 'react'

const Hero = () => {
  return (
    <div className="hero flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[100px]" style={{ minHeight: "calc(100vh - 80px)" }}>
      
      {/* Left Text */}
      <div className="left w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start py-6">
        <h3 className='text-3xl md:text-4xl lg:text-[60px] font-semibold leading-tight' style={{lineHeight:1}}>
          Unlock the secrets to <span className='sp-text'>Masterful</span> blogs here.
        </h3>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
          <button className='btnnormal'>Get Started</button>
          <button className='btnnormal'>Learn More</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="right w-full lg:w-1/2 flex justify-center items-center py-4">
        <img
          className='rounded-xl w-full md:w-[80%] h-auto max-h-[400px] object-cover'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k55b_10-2H5WeW-x8Enfr33LaJhh5hNalg&s"
          alt="hero"
        />
      </div>
    </div>
  )
}

export default Hero
