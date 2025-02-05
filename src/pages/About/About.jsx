import React, { useState, useEffect } from "react";

function About() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("userInfo");
    if (storedData) {
      setUserInfo(JSON.parse(storedData));
    }
  });

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      backgroundColor:"lightgray",
      padding:"20px"
    }}>
      <h1 style={{textAlign:"center"}}>User Information</h1>
      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px",
        backgroundColor:"white",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px gray"
      }}>
        <p style={{
          fontSize:"18px",
          color:"black",
          marginBottom:"20px"
        }}>Name:{userInfo.name}</p>
        <p style={{
          fontSize:"18px",
          color:"black",
          marginBottom:"20px"
        }}>Email:{userInfo.email}</p>
        <p style={{
          fontSize:"18px",
          color:"black",
          marginBottom:"20px"
        }}>Number:{userInfo.number}</p>
        <p style={{
          fontSize:"18px",
          color:"black",
          marginBottom:"20px"
        }}>Address:{userInfo.address}</p>
      </div>
    </div>
  );
}

export default About;