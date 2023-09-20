import React, { useState } from "react";
import "./ShowDashboard.css";
import Showinfo from "./Showinfo";
import model from "./pictures/model.png";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function ShowDashboard(props) {
  function Model(props) {
    const { scene } = useGLTF("./public/raspberry/source/rpi_L.obj");
    return <primitive object={scene} {...props} />;
  }

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
      {/* <img
        src={model}
        alt="model-3d"
        onClick={onBtnClick}
        className="img-fluid"
      />
      {showChildComp && <Showinfo />} */}

      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fav: 45 }}
        style={{ position: "absolute" }}
      >
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
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
