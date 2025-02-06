import React, { useState, useEffect } from "react";

function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  return (
    <div style={{ textAlign: "center", background: "#f4f4f4", minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>User Information</h2>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} style={{ background: "white", padding: "15px", marginBottom: "15px", borderRadius: "8px", boxShadow: "2px 2px 8px rgba(0,0,0,0.1)", maxWidth: "300px", margin: "auto" }}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Number:</strong> {user.num}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        ))
      ) : (
        <p style={{ color: "red" }}>No user data found</p>
      )}
    </div>
  );
}

export default About;
