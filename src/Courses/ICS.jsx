import React from 'react'
import { Link } from 'react-router-dom'

function ICS() {
  return (
    <div className='mx-2 ics'>
        
        <Link to='/CS/concepts' className='links' > 
            1. Understanding Basic Programming Concepts 
        </Link>  <br />

    
        <Link to='/CS/ProgLanguage' className='links' > 
            2. Learning a Programming Language 
        </Link>  <br />

        <Link to='/CS/DSA'className='links' > 
             3. Understanding Algorithms and Data Structures
         </Link> <br />

        <Link to='/CS/BuildSimpleProgs' className='links'> 
             4. Building Simple Programs 
        </Link> <br />

        <Link to='/CS/BuildComplexProgs' className='links'>
             5. Building Complex Programs
        </Link>
    </div>
  )
}

export default ICS