
import "./Sidebar.css"
import { Link } from "react-router-dom"
import add_product_icon from "../../assets/cart-add-solid-24.png"
import list_product_icon from "../../assets/lists.png"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={"/addproduct"} Style={{textDecoration:"none"}} >
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
         </Link>

         <Link to={"/listproduct"} Style={{textDecoration:"none"}} >
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
         </Link>
    </div>
  )
}

export default Sidebar