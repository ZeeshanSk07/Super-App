import React from 'react'

function Chip({user, movie,selected, setSelected}) {

  const remove = () => {
    setSelected(selected.filter(item => item != user))
  }
  const obj = movie.find((item)=>item.id === user)

  return (
    <>
      <div key={user.name} style={{display:'flex',backgroundColor:'#148A08',margin:'14px 20px 10px 0',width:'120px',height:'13px',padding:'4px 16px 16px 16px',borderRadius:'20px', flexDirection:'row',justifyContent:'space-between',fontSize:'18px'}}>
        {obj.name}&nbsp;&nbsp;<span style={{cursor:'pointer'}} onClick={remove}>X</span>
      </div>
    </>
  )
}

export default Chip