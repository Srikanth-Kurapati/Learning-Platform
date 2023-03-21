import React from 'react'
import { FaForward } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MarkCompleteBtn from '../../Components/MarkCompleteBtn'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function BasicProgrammingConcepts() {
 
  return (
    <div>

        <div className='col-sm-12'>
          <Link to ='/CS' > 
            back
          </Link>

             <span className='p-2 mx-3 text-danger h3'> BasicProgrammingConcepts </span>


          <Link to ='/CS/ProgLanguage' className='mx-3' data-tooltip-content='next chapter' data-tooltip-id='next' > 
            <FaForward />
          </Link>

         <ReactTooltip id='next' />

         <MarkCompleteBtn/>

        </div>

        <div className=' border-bottom'>

        <iframe width="500" height="315" src="https://www.youtube.com/embed/zOjov-2OZ0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='my-5'></iframe>

        </div >

        <div className='py-1 mx-1'>
          <p className='h5 mx-5'>
            This step might cover concepts like data types, variables, loops, and conditional statements.
          </p>    
        </div>     
    </div>
  )
}

export default BasicProgrammingConcepts