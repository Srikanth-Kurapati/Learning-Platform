import React from 'react'
import { Link } from 'react-router-dom'
import { FaBackward, FaForward } from 'react-icons/fa'
import MarkCompleteBtn from '../../Components/MarkCompleteBtn'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function DSA() {
    
  return (
    <div>
       
         <div className='col-sm-12'>

            <Link to ='/CS' className='mx-2'>  back </Link>

            <Link to ='/CS/ProgLanguage' data-tooltip-content='previous chapter' data-tooltip-id='prev' >  
                <FaBackward /> 
                        
            </Link>

                <ReactTooltip id='prev' />
                <ReactTooltip id='next' />

                <span className='p-2 mx-5 text-danger h3'> Understanding Algorithms and Data Structures </span>    

                <Link to ='/CS/BuildSimpleProgs' data-tooltip-content='next chapter' data-tooltip-id='next' >  <FaForward /> </Link>

                <MarkCompleteBtn/>

        </div>

        <div className=' border-bottom'>
            <iframe width="500" height="315" src="https://www.youtube-nocookie.com/embed/RBSGKlAvoiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='my-5'></iframe>
        </div>

        <div className='py-1 mx-1'>
            <p className='h5'>
                 This step might cover concepts like arrays, linked lists, stacks, queues, sorting algorithms, and searching algorithms.
             </p>
        </div>
        
  </div>
  )
}

export default DSA