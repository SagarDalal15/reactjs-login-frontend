import React from "react";
import { FormControl, InputBase, Button } from "@material-ui/core";

import "./style.css";

export default function Form() {
  return (
    <div>
      <div className="app-form-header">Login</div>
      <br />
      <br />
      <FormControl>
        <div className="app-form-label">Email</div>
        <InputBase
          placeholder="   Email"
          className="app-form-inputbase"
        ></InputBase>
        <br />
        <div className="app-form-label">Password</div>
        <div className="app-form-password" style={{ display: "flex" }}>
          <InputBase
            placeholder="   Password"
            className="app-form-inputbase"
          ></InputBase>
          <div className="app-form-forgotpassword">Forgot Password</div>
        </div>
        <br />
        <br />
        <Button
          variant="contained"
          disableElevation
          style={{
            fontFamily: "Montserrat",
            color: "#333333",
            fontWeight: "600",
            width: "300px",
            height: "35px",
            backgroundColor: "#F7D832",
          }}
        >
          L<span style={{ textTransform: "lowercase" }}>ogin</span>
        </Button>
        <br />
        <br />
        <div style={{ fontSize: "14px" }}>
          Don't have an account yet?
          <span style={{ fontWeight: "700" }}> Signup</span>
        </div>
      </FormControl>
    </div>
  );
}
