import React from "react";
import ShowDashboard from "./ShowDashboard";
export default function CheckEmail(props) {
  let list = "ghazal.danaei99@gmail.com";
  if (props.mail === list) {
    return (
      <div className="CheckEmail">
        Account is valid.
        <ShowDashboard />
      </div>
    );
  }
}
