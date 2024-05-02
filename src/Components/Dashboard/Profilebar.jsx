import React from 'react'
import img from '../../Pages/Images/image 15.png'

function Profilebar() {

    const user = JSON.parse(localStorage.getItem('userinfo'))
    const allmovies = JSON.parse(localStorage.getItem('allmovies'))
    const selected = JSON.parse(localStorage.getItem('selectedMovie'))
   
    const movies = allmovies.filter(movie => selected.includes(movie.id));


  return (
    <>
        <div style={{display:'flex',fontFamily:'Roboto',color:'white',backgroundColor:'#5746EA', flexDirection:'row',width:'100vw',height:'100vh', padding:'5%'}}>
            <div style={{display:'flex', width:'22vw', height:'100vh', marginLeft:'5%'}}>
                <img src={img} alt="profile" style={{width:'80%', height:'80%'}}/>
            </div>

            <div style={{margin:'5%', width:'40vw'}}>
                <div style={{fontSize:'3em'}}>{user.name}</div>
                <div style={{fontSize:'3em'}}>{user.email}</div>
                <div style={{fontSize:'5em'}}>{user.username}</div>

                <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap',marginTop:'8%'}}>{movies.map((movie)=>{
                return <div style={{display:'flex',backgroundColor:'#9F94FF',margin:'14px 20px 10px 0',width:'220px',height:'35px',padding:'12px 16px 16px 50px',borderRadius:'60px', flexDirection:'row',justifyContent:"start",alignItems:'center',fontSize:'1.8em'}} key={movie.id}>{movie.name}</div>
                })
                }</div>
            </div>
        </div>
    </>
  )
}

export default Profilebar