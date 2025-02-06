import React from "react";
import "./Navbar.css";
import { useLocation,Link } from "react-router";
//import AddAlertIcon from '@mui/icons-material/AddAlert';
function Navbar() {
    const location=useLocation ();
    const currentpage=location.pathname;
    return(
        <div id="navbar">
            <Link to="/" className={`option ${currentpage==='/'?'active':''}`} >Home</Link>
            <Link to="/about" className={`option ${currentpage==='/about'?'active':''}`} >About</Link>
            <Link to="/product"className={`option ${currentpage==='/product'?'active':''}`} >Product</Link>
            <Link to="/contact" className={`option${currentpage==='/contact'?'/contact':''}`}>Contact</Link>
        </div>
    )
}

export default Navbar;