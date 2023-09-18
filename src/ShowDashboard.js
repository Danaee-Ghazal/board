import React, { useState } from "react";
import "./ShowDashboard.css";
import Showinfo from "./Showinfo";
import model from "./pictures/model.png";

function ShowDashboard(props) {
  // function CallShowinfo(event) {
  //   event.preventDefault();
  //   return <Showinfo />;
  // }
  const [showChildComp, setShowChildComp] = useState(false);
  const onBtnClick = (e) => {
    e.preventDefault();
    setShowChildComp((prevState) => !prevState);
  };
  return (
    <div className="ShowDashboard">
      <img
        src={model}
        alt="model-3d"
        onClick={onBtnClick}
        className="img-fluid"
      />
      {showChildComp && <Showinfo />}
    </div>
  );
  // return (
  //   <div className="ShowDashboard">

  //     {/* <img
  //       src={model}
  //       onClick={CallShowinfo}
  //       style={{ "pointer-events": "all" }}
  //     /> */}
  //   </div>
  // );
}
export default ShowDashboard;
