import React from 'react';
import './styles/OrderForm.css';

const OrderForm = () => {
    const products = ['Collar', 'Harness', 'Leash'];
    const prices = [29.0, 57.0, 30.0];

    return (
        <div className="order-form">
          <h2>Select product</h2>
    
          {}
          <div className="product-selection">
            <label htmlFor="product-dropdown">Product:</label>
            <select id="product-dropdown">
              {products.map((product, index) => (
                <option key={index} value={index}>
                  {product} - ${prices[index].toFixed(2)}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    };
    
    export default OrderForm;