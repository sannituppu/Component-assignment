import React from 'react';
import './styles/OrderForm.css';
import { useState } from 'react';
import OrderInfo from './OrderInfo'

const OrderForm = () => {
    const products = ['Collar', 'Harness', 'Leash'];
    const prices = [29.0, 57.0, 30.0];

    const [productIndex, setProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const selectProduct = (event) => {
        setProductIndex(event.target.value);
    };

    const correctQuantity = (quantity) => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + quantity, 0));
      };

    return (
        <div className="order-form">
          <h2>Select product</h2>
    
          {}
          <div className="product-selection">
            <label htmlFor="product-dropdown">Product:</label>
            <select id="product-dropdown"
            value={productIndex}
            onChange={selectProduct}>
              {products.map((product, index) => (
                <option key={index} value={index}>
                  {product}  ({prices[index].toFixed(2)}€)
                </option>
              ))}
            </select>
          </div>

            {}
            <div className="quantity">
            <label htmlFor="quantity">Quantity:</label> {}
            <button onClick={() => correctQuantity(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => correctQuantity(1)}>+</button>
            </div>

            {}
            <OrderInfo 
                productName={products[productIndex]} 
                price={prices[productIndex]} 
                quantity={quantity} 
            />
        </div>
      );
    };
    
    export default OrderForm;