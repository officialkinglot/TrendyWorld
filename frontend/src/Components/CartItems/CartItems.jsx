import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,  all_product, cartItems, removeFromCart, formatPrice } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Name</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <button  className='productdisplay-right-sizes'>{cartItems[e.id].selectedSize}</button> 
                <p>₦{parseFloat(e.new_price.replace(/,/g, '')).toLocaleString()}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₦{(parseFloat(e.new_price.replace(/,/g, '')) * cartItems[e.id]).toLocaleString()}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        } else return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{formatPrice(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Charges</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>{formatPrice(getTotalCartAmount())}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>Do you have a promo code? Enter Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button className='cartitems-promobox-button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;