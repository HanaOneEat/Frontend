import React, { useEffect, useRef } from "react";
import TopBackNav from "./TopBackNav";

import CameraBG from "../assets/images/Camera_bg.png";

const CameraApp = () => {
  const videoRef = useRef(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("카메라 기능 Component 에러 : " + error);
    }
  };

  useEffect(() => {
    handleStartCamera();
  }, []);

  return (
    <>
      <TopBackNav />
      <div id="CA_container">
        <img src={CameraBG} alt="카메라 배경" />
        {/* <button onClick={handleStartCamera}>카메라</button> */}
        <video ref={videoRef} autoPlay playsInline></video>
      </div>
    </>
  );
};

export default CameraApp;
