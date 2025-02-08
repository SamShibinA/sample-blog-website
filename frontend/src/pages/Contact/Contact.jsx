import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contact.css"; // Ensure this is correctly imported

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
    <div className="contactform">
      <form onSubmit={handleSubmit}>
        <h3>Contact Us</h3>

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Number:</label>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} required />

        <label>Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
