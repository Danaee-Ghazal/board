import React, { useState } from "react";
import "./ShowDashboard.css";
import Showinfo from "./Showinfo";
import model from "./pictures/model.png";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { useLoader } from "@react-three/fiber";

function ShowDashboard(props) {
  // function Scene() {
  //   const obj = useLoader(OBJLoader, "./public/raspberry/source/rpi_L.obj");
  //   return <primitive object={obj} />;
  // }

  const [showChildComp, setShowChildComp] = useState(false);
  const onBtnClick = (e) => {
    e.preventDefault();
    setShowChildComp((prevState) => !prevState);
  };
  // Scene();
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
}
export default ShowDashboard;
