import React, { useState } from "react";
import "./Dashboard.css";
import CheckEmail from "./CheckEmail";
export default function Dashboard() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail(event.target[0].value);
  }
  // function updateEmail(event) {
  //   event.preventDefault();
  //   setEmail(event.target.value);
  // }

  return (
    <div className="Dashboard">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type the email please..."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <CheckEmail mail={email} />
    </div>
  );
}
