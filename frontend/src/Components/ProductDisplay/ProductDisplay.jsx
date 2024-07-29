import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const sizes = [
  { id: 1, name: 'S', active: false },
  { id: 2, name: 'M', active: false },
  { id: 3, name: 'L', active: false },
  { id: 4, name: 'XL', active: false },
  { id: 5, name: 'XXL', active: false },
];

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  // Check if product is undefined or null
  if (!product) {
    return <div className='productdisplay'>Loading product...</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product.id, selectedSize);
    } else {
      alert('Please select a size.');
    }
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src={product.image} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src={star_icon} alt={`Star ${index + 1}`} />
          ))}
          <img src={star_dull_icon} alt="Star 5" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₦{product.old_price}</div>
          <div className="productdisplay-right-price-new">₦{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          adgDGDGSdgs
          debitis nam molestias molestiae iure minus quis.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Your Size</h1>
          <div className="productdisplay-right-sizes">
            {sizes.map((size) => (
              <div
                key={size.id}
                className={`size-option ${selectedSize?.id === size.id ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size.name}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top </p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
