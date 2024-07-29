 
import "./Navbar.css";
import navlogo from "../../assets/logo.png";
import navprofile from "../../assets/Navprofile (1).png";


const Navbar = () => {
  return (
    <div className='navbar'> 

    <img src={navlogo} className='nav-logo' alt="" />
    <img src={navprofile} className='nav-profile' alt="" />

    </div>
  )
};

export default Navbar