import React from "react";
import "./Checkout.css";
import Paypal from "../../assets/paypal.png";

import { useDispatch } from "react-redux";
import {nextStep} from '../../redux/stepSlice';

const CheckOut = () => {
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
        <div className="title">How do you want to pay?</div>
        <div className="payment-options">
          <div className="box-row bottom-padding">
            <div className="payment-card">
              <div className="row">
                <div className="payment-title">Visa 5114</div>
                <div>Saved Card</div>
              </div>
              <div className="payment-subtitle">02/25</div>
            </div>
            <div className="information-text">
              You can make changes to your saved card <br />
              with your Etheware ID after you <br />
              complete your purchase.
            </div>
          </div>
          <div className="box-row bottom-padding">
            <div className="payment-card">
              <div className="payment-title">New Credit or Debit Card</div>
              <div className="payment-subtitle">
                Apple Card, Visa,Mastercard
                <br />
                Discovery,UnionPay
              </div>
            </div>
            <div className="information-text"></div>
          </div>
          <div className="box-row bottom-padding">
            <div className="payment-card">
              <img src={Paypal} alt="paypal" height={"60px"} width={"140px"} />
            </div>
            <div className="information-text">
              Items in your order are not eligible for this
              <br />
              payment method. Please select another
              <br />
              form of payment.
            </div>
          </div>
        </div>
        <div className="information-text">
          Etheware Gift Cards are not eligible with some items in your order.
        </div>
        <div
          style={{
            width: "100%",

            borderBottom: " 1px solid black",
            textAlign: "center",
            marginBottom: "10px",
          }}
        ></div>
        <button className="submit-button"  onClick={() => dispatch(nextStep())}>Continue and Review</button>
      </div>
    </div>
  );
};

export default CheckOut;
