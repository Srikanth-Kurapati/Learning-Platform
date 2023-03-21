import React from 'react'
import {FaHamsa, FaHome, FaTrophy, FaUser, FaUserCircle, FaUserClock} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Exercise } from '../App'
import { useContext } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function Navbar() {
    const [percentage,setPercentage] = useContext(Exercise)
  return (
    <nav className='navbar bg-success h3'>
        
        <div className='mx-2 flex justify-end'> 

            <Link to='/' data-tooltip-content='go home' data-tooltip-id='home'>
                <FaHome className='text-warning '/>
            </Link>
        
        </div>

            <ReactTooltip id='home' />

                 <h2 className='text-info bg-white px-3 py-1'> Learning Advise </h2>

            <ReactTooltip id='score' />
            
        <div>
            <span data-tooltip-content='your score' data-tooltip-id='score' data-tooltip-place='left'>
                    <FaTrophy className='text-black bg-white h1 m-1 p-1'/>
                        {percentage}% 
            </span>

            <FaUserCircle className=' text-black bg-white h1 m-1 p-1'/>
            
        </div>
    </nav>
  )
}

export default Navbar
