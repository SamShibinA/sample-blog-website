import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [address,setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify({ name, email, number, address }));
    navigate("/about");
  };

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      backgroundColor:"#f0f0f0",
      padding:"20px"
    }}>
      
      <form onSubmit={handleSubmit} style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px",
        backgroundColor:"#fff",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)"
      }}>
        <label style={{
          fontSize:"18px",
          fontWeight:"bold",
          color:"black",
          marginBottom:"10px"
        }}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
          padding:"10px",
          fontSize:"18px",
          border:"1px solid black",
          borderRadius:"5px",
          marginBottom:"20px"
        }} />
        <label style={{
          fontSize:"18px",
          fontWeight:"bold",
          color:"black",
          marginBottom:"10px"
        }}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{
          padding:"10px",
          fontSize:"18px",
          border:"1px solid black",
          borderRadius:"5px",
          marginBottom:"20px"
        }} />
        <label style={{
          fontSize:"18px",
          fontWeight:"bold",
          color:"black",
          marginBottom:"10px"
        }}>Number:</label>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} style={{
          padding:"10px",
          fontSize:"18px",
          border:"1px solid black",
          borderRadius:"5px",
          marginBottom:"20px"
        }} />
        <label style={{
          fontSize:"18px",
          fontWeight:"bold",
          color:"black",
          marginBottom:"10px"
        }}>Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} style={{
          padding:"10px",
          fontSize:"18px",
          border:"1px solid black",
          borderRadius:"5px",
          marginBottom:"20px"
        }} />
        <button type="submit" style={{
          padding:"10px",
          fontSize:"18px",
          backgroundColor:"black",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer"
        }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;