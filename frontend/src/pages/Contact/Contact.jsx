import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, num, address };

    try {
      const response = await axios.post("http://localhost:5000/api/contact", userData);
      alert(response.data.message);
      setName("");
      setEmail("");
      setNum("");
      setAddress("");
      navigate("/about");
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f8f9fa" }}>
      <form onSubmit={handleSubmit} style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", width: "300px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#333" }}>Contact Us</h3>
        
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid gray" }} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid gray" }} />

        <label>Number:</label>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid gray" }} />

        <label>Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid gray" }} />

        <button type="submit" style={{ width: "100%", padding: "10px", background: "black", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
