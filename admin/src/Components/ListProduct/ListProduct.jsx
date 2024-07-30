import { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cart_cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://trendyworldbackend.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => { setAllProducts(data); });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("https://trendyworldbackend.onrender.com/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <h1>ALL PRODUCT LISTS</h1>
      <div className="listproduct-format-main">
        <p>PRODUCTS</p>
        <p>TITLE</p>
        <p>OLD PRICE</p>
        <p>NEW PRICE</p>
        <p>CATEGORY</p>
        <p>REMOVE</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <div key={product.id}>
            <div className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>₦{parseFloat(product.old_price.replace(/,/g, '')).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p>₦{parseFloat(product.new_price.replace(/,/g, '')).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p>{product.category}</p>
              <img onClick={() => { removeProduct(product.id) }} className="listproduct-remove-icon" src={cross_icon} alt="" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
