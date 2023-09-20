import React from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
// import { googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./Dashboard.css";
// import CheckEmail from "./CheckEmail";
import ShowDashboard from "./ShowDashboard";

export default function Dashboard() {
  // const [email, setEmail] = useState("");
  const clientId =
    "465562680061-sk6v9r0i8cr3ocsk3i0063m3ajvkf8lp.apps.googleusercontent.com";
  const showUserInformation = (response) => {
    console.log(jwt_decode(response.credential));
    // setEmail(String(JSON.parse(jwt_decode(response.credential)).email));
    // <CheckEmail data={email} />;
  };
  // const onBtnClick = (e) => {
  //   e.preventDefault();
  //   googleLogout();
  // };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="Dashboard">
        <GoogleLogin
          onSuccess={showUserInformation}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <ShowDashboard />
      </div>
    </GoogleOAuthProvider>
  );
}
