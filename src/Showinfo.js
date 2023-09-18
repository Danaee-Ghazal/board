import React from "react";
import file from "./files/boards' information.json";
export default function Showinfo() {
  return (
    <div>
      <div>deviceID:{file[0].deviceID}</div>
      <div>firmwareVersion:{file[0].firmwareVersion}</div>
      <div>processor:{file[0].processor}</div>
    </div>
  );
}
