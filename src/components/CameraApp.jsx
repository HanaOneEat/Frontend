import React, { useEffect, useRef, useState } from "react";
import TopBackNav from "./TopBackNav";
import QrScanner from "react-qr-scanner";

import CameraBG from "../assets/images/Camera_bg.png";
import sendMoney from "../utils/sendMoney";
import { useNavigate } from "react-router-dom";

const CameraApp = () => {
  const videoRef = useRef(null);
  //   const [toIdData, setToIdData] = useState(null);
  const navigate = useNavigate();

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

  const handleQrScan = (inputData) => {
    if (inputData) {
      // setToIdData(inputData.text);
      //JSON문자열을 객체로 변환
      const parsedData = JSON.parse(inputData.text);
      // console.log("보내기 전 : " + parsedData.toId);
      //toId값 출력
      navigate(`/input_amount/${JSON.parse(parsedData.toId)}`);
    }
  };

  return (
    <>
      <TopBackNav />
      <div id="CA_container">
        <img src={CameraBG} alt="카메라 배경" />
        <div className="title">코드 스캔</div>
        <QrScanner
          delay={300}
          onError={handleQrError}
          onScan={handleQrScan}
          className="camera_on"
        />
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
