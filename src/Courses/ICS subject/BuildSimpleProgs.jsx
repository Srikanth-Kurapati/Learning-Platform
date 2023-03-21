import React from 'react'
import { Link } from 'react-router-dom'
import { FaBackward, FaForward } from 'react-icons/fa'
import MarkCompleteBtn from '../../Components/MarkCompleteBtn'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function BuildSimpleProgs() {
   
  return (
    <div>
        <div>
            <Link to ='/CS' className='mx-3' >  back  </Link>


            <Link to ='/CS/DSA' data-tooltip-content='previous chapter' data-tooltip-id='prev' >  <FaBackward />  </Link>

    
            <ReactTooltip id='prev' />
            <ReactTooltip id='next' />

            <span className='p-2 mx-5 text-danger h3'>  Build Simple Programs  </span>

           

            <Link to ='/CS/BuildComplexProgs' data-tooltip-content='next chapter' data-tooltip-id='next' >  <FaForward />  </Link>
        
            <MarkCompleteBtn/>

        </div>

        <div className=' border-bottom'>

            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EcCNNKcDeA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-3 my-5'></iframe>

             <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/72fIizW3N-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='my-5'></iframe>
        </div>

        <div className='py-1 mx-1'>
          <p className='h5'>
            This step might involve writing simple programs that demonstrate the concepts covered in the previous steps.
          </p>
        </div>
        
  </div>
  )
}

export default BuildSimpleProgs