import React from 'react';

const OrderInfo = ({ productName, price, quantity }) => {
    const totalPrice = (price * quantity).toFixed(2);

    return (
        <div className="order-info">
            <h3>Order Info</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>{quantity}</td>
                        <td>{totalPrice}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderInfo;