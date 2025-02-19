import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div>
      {/* ----------Left Side --------- */}
      <div>
        <p>
            Book Appointment <br/> With Trusted Doctors
        </p>
        <div>
        <img src={assets.group_profiles} alt=''/>
        <p>Simply browse through our extensive list of trusted doctors, <br/> Schedule</p>
        </div>
        <a>
        Book appointment <img src={assets.arrow_icon}/>
    </a>
      </div>
      
      {/* --------------Right Side------------------- */}
      <div>
        
      </div>
   
 
    </div>
  )
}

export default Header
