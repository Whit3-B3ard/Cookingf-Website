import React from 'react'
import Welcome from './welcome'
import Icons from "./icons"
import Card from "./cards"
import Feedback from "./feedback"

export default function Contact () {
  return (
    <div>
    <div className="w-full h-2/4 bg-black flex">
    <div className='flex justify-start flex-1'>
      <img src="https://www.markwellfoods.com.au/wp-content/uploads/2022/07/shutterstock_1345559753-scaled.jpg" className="h-full" alt="" />
    </div>
    <div className='flex justify-end flex-1'>
      <img src="https://info.ehl.edu/hubfs/Brand_Experience_Header.jpg" className="h-full" alt="" />
    </div>
  </div>
        
        <Welcome />
        <Icons/> 
        <Card/>
        <Feedback/>
        <img src= 
'https://media.geeksforgeeks.org/wp-content/uploads/20230821104522/gfg-(5).jpg'
           style={{marginTop:"14%", marginLeft:"44%"}}/>

    </div>
  )
}
