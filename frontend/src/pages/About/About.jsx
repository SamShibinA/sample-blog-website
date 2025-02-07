import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function About() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/about")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/about/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        alert("User Deleted");
      })
      .catch(err => console.log(err));
  };

  const handleClickOpen = (user) => {
    if (user) {
      setUserId(user.id);
      setName(user.name);
      setEmail(user.email);
      setNum(user.num);
      setAddress(user.address);
    } 
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, num, address };
    try {
      await axios.put(`http://localhost:5000/api/about/${userId}`, userData);
      alert("Operation Successful");
      const {data}=await axios.get("http://localhost:5000/api/about");
      setUsers(data);
      setOpen(false);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", background: "#f4f4f4", height: "100vh", padding: "20px" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>User Information</h2>
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} style={{ background: "white", padding: "15px", marginBottom: "3px", borderRadius: "8px", boxShadow: "2px 2px 8px rgba(0,0,0,0.1)", maxWidth: "300px", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Number:</strong> {user.num}</p>
                <p><strong>Address:</strong> {user.address}</p>
              </div>
              <div>
                <EditIcon onClick={() => handleClickOpen(user)} style={{ cursor: "pointer" }} />
                <DeleteIcon onClick={() => handleDelete(user.id)} style={{ cursor: "pointer", color: "red" }} />
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>No user data found</p>
        )}
      </div>

      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle> Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Update the user details below.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField autoFocus margin="dense" label="Name" type="text" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />
            <TextField margin="dense" label="Email" type="email" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField margin="dense" label="Number" type="number" fullWidth required value={num} onChange={(e) => setNum(e.target.value)} />
            <TextField margin="dense" label="Address" type="text" fullWidth required multiline rows={3} value={address} onChange={(e) => setAddress(e.target.value)} />
            <DialogActions>
              <Button onClick={()=>setOpen(false)}>Cancel</Button>
              <Button type="submit">Update</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
