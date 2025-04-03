import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    const fetchingcartvalue = localStorage.getItem('cartItemList');
    if (fetchingcartvalue) {
      try {
        const parsedData = JSON.parse(fetchingcartvalue);
        if (Array.isArray(parsedData)) setCartArray(parsedData);
      } catch (err) {
        console.error("Parsing Error:", err);
      }
    }
  }, []);

  function removeitemCart(index) {
    const updatedCart = [...cartArray];
    updatedCart.splice(index, 1);
    setCartArray(updatedCart);
    localStorage.setItem('cartItemList', JSON.stringify(updatedCart));
  }
  

  const handleBuyNow = () => {
    // Here you can integrate payment logic or API call

    document.querySelector('.payment').style.display='flex'
  };
  

  return (
    <div className="cart-container">
      <div className="payment">
         <h3>PAYMENT METHOD</h3>
         <input type="text" name="" id="" placeholder='Enter cardholder name'/>  
         <input type="number" name="" id="" placeholder='card number'/>
        <input type="number" name="" id="" placeholder='cvv'/>
          <input type="date" name="" id="" />
       <button   onClick={()=> {
        
        document.querySelector('.payment').style.display='none'
        
        }  }>PAY</button>

      </div>
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartArray.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          {cartArray.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.picture} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Category: {item.Category}</p>
                <p>Rating: {item.Rating} ⭐</p>
              </div>
              <div className="cart-price">₹ {item.Price}</div>
             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
             <div>
              <button className='removeitembtn' onClick={()=>removeitemCart(index)}>Remove</button>

              
             </div>

            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
