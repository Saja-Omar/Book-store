import React from "react";
import "./cart.css";
import { cartInfo } from "../../data/cart";
function Cart() {
  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={`/books/${item.image}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b>
                    {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b>
                    {item.author}
                  </div>
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button>
                      <i className="bi bi-plus-lg"></i>
                    </button>
                    <b>{item.quantity}</b>
                    <button>
                      <i className="bi bi-dash-lg"></i>
                    </button>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <i className="bi bi-trash-fill"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
        <h5 className="order-summary-title">ORDER SUMMARY</h5>
        <div className="order-summary-item">
          <span>Subtotal</span>
          <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>

        </div>
        <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
      </div>
      </div>
      
    </div>
  );
}
export default Cart;
