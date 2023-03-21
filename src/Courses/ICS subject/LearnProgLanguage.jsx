import React from 'react'
import { FaBackward, FaForward } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MarkCompleteBtn from '../../Components/MarkCompleteBtn'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function LearnProgLanguage() {
    
  return (
    <div>
        <div>
            <Link to ='/CS'  className='mx-2'> 
                back
            </Link>

            <Link to ='/CS/concepts' data-tooltip-content='previuos chapter' data-tooltip-id='prev' > <FaBackward />  </Link>

                <span className='p-2 mx-3 text-danger h3'> Learn Programming language </span>

            <Link to ='/CS/DSA' data-tooltip-content='next chapter' data-tooltip-id='next' >   <FaForward className='inline' /> </Link>

            <MarkCompleteBtn className='inline'/>

            <ReactTooltip id='prev' />
            <ReactTooltip id='next' />

        </div>

        <div className=' border-bottom'>

             <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KJgsSFOSQv0?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='my-5'></iframe>

        </div>

      <div className='py-1 '>
          <p className='h5 my-2'>
            by watching the above video, you can learn all the basic concepts of C, including below 
          </p>
            <ul >
                
                <li> how to setup C environment </li>
                <li> data types in C </li>
                <li> variables in C </li>
                <li> loops in C </li>
                <li> conditional statements  in C </li>
                <li> building progrmas using C </li>
            
            </ul> 
        </div>
        
    </div>
  )
}

export default LearnProgLanguage
