import React from "react";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottom-container">
      <div className="menus">
        <div className="first-column">
          <div>
            <ul>
              <li>Shop and Learn</li>
              <li>Store</li>
              <li>Bronze</li>
              <li>Silver</li>
              <li>Gold</li>
              <li>Diamond Peak</li>
              <li>Platinum Unlimited</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Why Etheware</li>
              <li>Why Choose Etheware</li>
              <li>The Etheware Difference</li>
              <li>Company</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Account</li>
              <li>Order History</li>
              <li>Manage Your Etheware Account</li>
              <li>Etheware Cloud Account</li>
              <li>Create an Account</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Etheware Store</li>
              <li>Store</li>
              <li>Etheware Support</li>
              <li>Etheware Trade-In</li>
            </ul>
          </div>
        </div>
        <div className="second-column">
          <div>
            <ul>
              <li>About Etheware</li>
              <li>Career Opportunities</li>
              <li>Company</li>
              <li>Contact Etheware</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Get In Touch</li>
              <li>More ways to shop than online. Call 1-619-872-3038</li>
              <li>or Email Etheware</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="third-column">
        <div>@2022 Etheware.com. All rights reserved.</div>
      </div>
      <div className="fourth-column">
        <div>Privacy Policy</div>
        <div>Terms of User</div>
        <div>Sales and Refunds</div>
        <div>Legal</div>
        <div>Site Map</div>
      </div>
      <div className="third-column">
        <div>
          Etheware Subscription Plans automatically renew until cancelled. An
          account is required to request maintenance. After purchasing your
          subscription plan, you will be contacted by the Etheware Subscription
          Management team in to begin your services.
        </div>
      </div>
      <div className="third-column">
        <div>Copyright © Etheware LLC. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default BottomBar;
