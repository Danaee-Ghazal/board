import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
// import { googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./Dashboard.css";
import CheckEmail from "./CheckEmail";
// import ShowDashboard from "./ShowDashboard";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const clientId =
    "465562680061-sk6v9r0i8cr3ocsk3i0063m3ajvkf8lp.apps.googleusercontent.com";
  const showUserInformation = (response) => {
    setEmail(String(JSON.parse(jwt_decode(response.credential)).email));
    <CheckEmail data={email} />;
  };
  // const onBtnClick = (e) => {
  //   e.preventDefault();
  //   googleLogout();
  // };

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setEmail(event.target[0].value);
  // }
  // function updateEmail(event) {
  //   event.preventDefault();
  //   setEmail(event.target.value);
  // }
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="Dashboard">
        <GoogleLogin
          onSuccess={showUserInformation}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        {/* // <button onClick={onBtnClick}>Logout</button>
        //{" "} */}
        {/* <form onSubmit={handleSubmit}>
    //       <div className="row">
    //         <div className="col-9">
    //           <input
    //             type="search"
    //             placeholder="Type the email please..."
    //             className="form-control"
    //             autoFocus="on"
    //           ></input>
    //         </div>
    //         <div className="col-3">
    //           <input
    //             type="submit"
    //             value="Search"
    //             className="btn btn-primary w-100"
    //           ></input>
    //         </div>
    //       </div>
    //     </form>
    //     <CheckEmail mail={email} /> */}
      </div>
    </GoogleOAuthProvider>
  );
}
