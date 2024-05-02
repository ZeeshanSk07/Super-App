import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Css files/Category.css'
import Section from '../Components/Category/Section.jsx'
import img1 from './Images/image 2.png'
import img2 from './Images/image 3.png'
import img3 from './Images/image 4.png'
import img4 from './Images/image 6.png'
import img5 from './Images/image 7.png'
import img6 from './Images/image 8.png'
import img7 from './Images/image 9.png'
import img8 from './Images/image 10.png'
import img9 from './Images/image 11.png'
import Chip from '../Components/Category/Chip.jsx'



const data = [
    {
        id: 1,
        name: 'Action',
        img:img1,
        bg:'rgba(255, 82, 9, 1)'
    },
    {
        id: 2,
        name: 'Drama',
        img:img2,
        bg: 'rgba(215, 164, 255, 1)'
    },
    {
        id: 3,
        name: 'Romance',
        img:img3,
        bg: 'rgba(20, 138, 8, 1)'
    },
    {
        id: 4,
        name: 'Thriller',
        img:img4,
        bg: 'rgba(132, 194, 255, 1)'
    },
    {
        id: 5,
        name: 'Western',
        img:img5,
        bg: 'rgba(144, 37, 0, 1)'
    },
    {
        id: 6,
        name: 'Horror',
        img:img6,
        bg: 'rgba(115, 88, 255, 1)'
    },
    {
        id: 7,
        name: 'Fantasy',
        img:img7,
        bg: 'rgba(255, 74, 222, 1)'
    },
    {
        id: 8,
        name: 'Music',
        img:img8,
        bg: 'rgba(230, 30, 50, 1)'
    },
    {
        id: 9,
        name: 'Fiction',
        img:img9,
        bg: 'rgba(108, 208, 97, 1)'
    }
]


function Category() {

    const navigate = useNavigate();

    const [selected, setSelected] = useState([]);


    const next = () => {
        if (selected.length < 3){
            alert('Please select atleast 3 categories');
        }
        else{
            localStorage.setItem('selectedMovie', JSON.stringify(selected));
            localStorage.setItem('allmovies', JSON.stringify(data));
            navigate('/dashboard')
        }
    }
    
    return (
        <>
            <div className="container">
                <div className='chips'>
                    <div className="head2">Super app</div><br/>
                    <h1>Choose your entertainment category</h1><br/>
                    <div className='selectitem'>
                    {selected.map((user) =>{
                        return <Chip key={user.id} user={user} movie={data} selected={selected} setSelected={setSelected} />
                    })}
                    </div>

                </div>
                
                <div className='category'>
                    {data.map((user)=>{
                        return <Section user={user} key={user.id} selected ={selected} setSelected={setSelected}/>
                    }) }
                </div>
                <button className='nextbtn' onClick={next}>Next Page</button>
            </div>

        
        </>
    )
}

export default Category