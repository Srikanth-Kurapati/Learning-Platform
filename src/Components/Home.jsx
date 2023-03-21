import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='row centre mx-5'>
       
        <Link to='/CS' className='m-2 p-2  col-lg-3 col-md-4 border border-warning link'  > Introduction to Computer Science along with C language </Link>
       

        <Link className='m-2 p-2  col-lg-3 col-md-4 border border-warning link' to='/communication-skills'> Communication Skills </Link>

        <Link  className='m-2 p-2  col-lg-3 col-md-4 border border-warning link' to='/mainframes'> IBM mainframe  </Link>

    </div>
  )
}

export default Home

