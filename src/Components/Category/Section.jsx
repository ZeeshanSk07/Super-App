import React from "react";
function Section({ user, selected, setSelected }) {

  const handlechange = () => {
    if (selected.includes(user.id)){
      setSelected(selected.filter((id) => id!== user.id));
    }
    else{
      setSelected([...selected, user.id]);
    }
    console.log(selected);
  };

  return (
    <>
      <div 
        style={{
          fontFamily: "DM sans",
          width: "150px",
          height: "150px",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          backgroundColor: user.bg,
          borderRadius: "10px",
          margin: "30px 25px 10px 25px",
          padding: "5px",
        }}
        onClick={handlechange}
      >
        <h2
          style={{
            color: "black",
            color: "white",
            textAlign: "start",
            marginBottom: "1px",
            marginTop: "14px",
          }}
        >
          {user.name}
        </h2>
        <br />

        <img src={user.img} alt={user.name} />
      </div>
    </>
  );
}

export default Section;
