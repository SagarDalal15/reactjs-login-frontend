import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  InputBase,
  Button,
} from "@material-ui/core";

import yellowBubble from "../../assets/YellowBubble.svg";
import bubble1 from "../../assets/Bubble.svg";
import bubble2 from "../../assets/Bubble-2.svg";
import loginsvg from "../../assets/Login.svg";
import "./style.css";
import Form from "../Form";

export default function App() {
  return (
    <div className="app">
      <div style={{ position: "absolute" }}>
        <img style={{ width: "180px" }} src={bubble1}></img>
      </div>
      <div className="app-heading">UN-LOCK</div>
      <div className="app-form">
        <Form />
      </div>
      <div className="app-yellow-bubble-wrapper">
        <img className="app-yellow-bubble" src={yellowBubble}></img>

        <div>
          <Button
            variant="contained"
            disableElevation
            style={{
              position: "absolute",
              right: "100px",
              top: "50px",
              fontWeight: "600",
              width: "150px",
              height: "35px",
              color: "#333333",
              backgroundColor: "#F7D832",
            }}
          >
            T<span style={{ textTransform: "lowercase" }}>est</span>
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            fontSize: "22px",
            fontWeight: "700",
            color: "#333333",
            right: "100px",
            top: "180px",
          }}
        >
          Unlock your stuck revenue.
          <br />
        </div>
        <div
          style={{
            right: "100px",
            position: "absolute",
            color: "#333333",
            top: "222px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          We help you unlock the true potential connect with your customers to
        </div>
        <div
          style={{
            right: "100px",
            position: "absolute",
            color: "#333333",
            top: "238px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          understand the rights and wrongs with you product.
        </div>

        <div
          style={{
            position: "absolute",
            right: "360px",
            top: "310px",
            width: "100px",
          }}
        >
          <img style={{ width: "340px" }} src={loginsvg}></img>
        </div>
      </div>
      <div className="app-footer-wrapper">
        <div className="app-footer">
          <div className="app-terms">Terms of Service</div>
          <div className="app-policy">Privacy Policy</div>
        </div>
      </div>
      <div className="app-bubble2-wrapper">
        <img className="app-bubble2" src={bubble2}></img>
      </div>
    </div>
  );
}
