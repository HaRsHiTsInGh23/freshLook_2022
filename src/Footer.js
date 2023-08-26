import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="Footer_nav">
        <span className="news1 line1">Newsletter</span>
        <div className="line2">
          <span className="news1">
            Get news about articles and updates in your inbox.
          </span>
        </div>
        <span className="news1 line4">GET</span>
        <div className="line5">
          <span className="news1">IN TOUCH</span>
        </div>
      </div>
      <form className="form">
        <div>
          <label for="name">
            <input type="text" name="name" id="name" placeholder=" " />
            <span class="placeholder">Name</span>
          </label>
        </div>
        <div>
          <label for="email">
            <input type="email" name="email" id="email" placeholder=" " />
            <span class="placeholder">Email</span>
          </label>
        </div>
        <div>
          <label for="message">
            <input type="text" name="message" id="message" placeholder=" " />
            <span class="placeholder">Message</span>
          </label>
        </div>
      </form>
    </footer>
  );
}

export default Footer;
