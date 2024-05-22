import React, { useEffect, useRef, useState } from "react";
import TopBackNav from "./TopBackNav";
import QrScanner from "react-qr-scanner";

import CameraBG from "../assets/images/Camera_bg.png";

const CameraApp = () => {
  const videoRef = useRef(null);
  const [data, setData] = useState("No result");

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("카메라 권한 허용 에러 : " + error);
    }
  };

  useEffect(() => {
    handleStartCamera();
  }, []);

  const handleQrError = (error) => {
    console.error(error);
  };

  const handleQrScan = (data) => {
    if (data) {
      setData(data.text);
      console.log("QR 인식 값 : ", data.text);
    }
  };

  return (
    <>
      <TopBackNav />
      <div id="CA_container">
        <div className="title">코드 스캔</div>
        <QrScanner
          delay={300}
          onError={handleQrError}
          onScan={handleQrScan}
          className="camera_on"
        />
        <img src={CameraBG} alt="카메라 배경" />
        <div className="scan_rct_box">
          <div className="ul_border" />
          <div className="ur_border" />
          <div className="dr_border" />
          <div className="dl_border" />
        </div>
        <div className="about">QR코드/바코드를 카메라 전면에 스캔해주세요.</div>
      </div>
    </>
  );
};

export default CameraApp;
