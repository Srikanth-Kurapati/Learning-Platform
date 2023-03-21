import React from 'react'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
import MarkCompleteBtn from '../../Components/MarkCompleteBtn'
import { Tooltip as ReactTooltip } from 'react-tooltip'


function BuildComplexProgs() {

  return (
    <div>
        <div>

             <Link to ='/CS' className='mx-3' > back </Link>

            <Link to ='/CS/BuildSimpleProgs' data-tooltip-content='previous chapter' data-tooltip-id='prev'> <FaBackward /> </Link>
            
            <ReactTooltip id='prev' />

            <span className='p-2 mx-5 text-danger h3'> Build Complex Programs  </span>

            <MarkCompleteBtn/>

        </div>

        <div className=' border-bottom'>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_2msghvRn5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='my-5'></iframe>
        </div>

        <div className='py-1 mx-1'>
          <p className='h5'>
            This step might involve building larger programs that require the student to use the concepts they've learned in a more complex and integrated manner
          </p>
        </div>
  </div>


  )
}

export default BuildComplexProgs