import React from 'react'
import './Css files/Home.css'
import Registration from '../Components/Home/Registration.jsx'
import bgimg from './Images/image 13.png';

function Home() {
  return (
    <>
    <div className="home">
    <div className='halfpart1' style={{position: 'relative'}}>
        <img src={bgimg} alt="Background" style={{width: '100%', height: '100%'}} />
        <div className="text-overlay">
          <span style={{color: 'white',fontSize:'1.2em',textAlign:'start'}}><h1>Discover new things on <br/> Superapp</h1></span>
        </div>
      </div>
      <div className='halfpart2'><Registration/></div>
      
    </div>
    </>
  )
}

export default Home