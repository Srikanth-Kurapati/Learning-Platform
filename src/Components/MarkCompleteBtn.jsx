import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useState,useContext } from 'react'
import { Exercise } from '../App'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function MarkCompleteBtn() {

    const [percentage,setPercentage] = useContext(Exercise)
    const [disabled, setDisabled] = useState(false)

    const handleClick = e =>{
        setPercentage(percentage + 20)
        setDisabled(true)

  }
  return (
    <div>
        
        <button onClick={handleClick} disabled={disabled}className='my-2' data-tooltip-content='mark as complete'   data-tooltip-id='completed' data-tooltip-place='bottom' > 

                <FaCheck className={`text-${disabled?'success':'warning'} h3 border border-white`}/> 
                
        </button>
        
        <ReactTooltip id='completed'/>
    </div>
  )
}

export default MarkCompleteBtn

