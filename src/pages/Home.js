import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { FaPaperPlane } from 'react-icons/fa';

function Home () {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 d-flex flex-direction-column align-items-center justify-content-center'>
          <div>
            <h1>Share the world with your friends</h1>
            <p>Chat App lets you connect with the world</p>
            <Link to='/chat' className='btn btn-success'>Get started  <FaPaperPlane  style={{marginLeft:"5px"}}/></Link>
          </div>
        </div>

        <div className='col-md-6 home__bg'></div>
      </div>
    </div>
  )
}

export default Home
