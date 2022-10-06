import React from "react";
import Divider from "../../components/Divider";
import Mac from "../../assets/mac.png";
import "./PlaceOrder.css";

import { useDispatch } from "react-redux";
import { nextStep } from "../../redux/registerSlice";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="row">
          <div className="checkout-text">Checkout</div>
          <div className="order-summery">Show order summery:$112.09</div>
        </div>
        <div
          style={{
            width: "100%",
            borderBottom: " 1px solid black",
            textAlign: "center",
            marginBottom: "10px",
          }}
        ></div>
        <div className="title">
          Ready to place order?
          <br />
          Let's make sure everything's right.
        </div>
        <div className="row">
          <div className="column">
            <img src={Mac} alt="mac" />
          </div>
          <div className="column">
            <div className="top-title">
              Etheware developer program-
              <br />
              Membership for one year
            </div>
          </div>
          <div className="column">
            <div className="top-title">1</div>
          </div>
          <div className="column">
            <div className="top-title">$99.99</div>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="column">
            <div className="top-title">Payment Detials</div>
            <div>Change</div>
          </div>
          <div className="column">
            <div className="second-title">Pay in full with:</div>
            <div className="third-title">Visa****</div>
          </div>
          <div className="column"></div>
          <div className="column">
            <div className="second-title">Billing address</div>
            <div className="third-title">Alex Shire</div>
            <div className="third-title">600 BST</div>
            <div className="third-title">San Diago</div>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="column">
            <div className="top-title">Your Total</div>
          </div>
          <div className="column">
            <div className="third-title">Sub Total</div>
            <div className="third-title">Shipping</div>
            <div className="third-title">Estimated Tax</div>
          </div>
          <div className="column"></div>
          <div className="column">
            <div className="third-title">$99</div>
            <div className="third-title">$99</div>
            <div className="third-title">$99</div>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="column"></div>
          <div className="column">
            <div className="top-title">Total</div>
          </div>
          <div className="column"></div>
          <div className="column">
            <div className="top-title">$99</div>
          </div>
        </div>
        <div className="submit-column">
          <button className="order-button"  onClick={() => dispatch(nextStep())}>Place Your Order</button>
          <div className="warning-text">
            Etheware Gift Cards are not eligible with some items in your order.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
