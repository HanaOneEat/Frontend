import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBackNav from "./TopBackNav";
import CameraBG from "../assets/images/Camera_bg.png";
import sendMoney from "../utils/sendMoney";

const InputAmount = () => {
  const { toId } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    console.log("연결됨 ; " + toId);
  }, []);

  const sendAll = () => {
    //  console.log("데이터", toId, amount);
    sendMoney(1, amount)
      .then((response) => {
        console.log("Transaction successful:", response);
        setIsDone(true);
        const timer = setTimeout(() => {
          navigate("/main");
        }, 3000);
        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.error("Transaction failed:", error);
      });
  };

  const DoneModal = () => {
    return <div className="done_modal_container">완료되었습니다!</div>;
  };

  return (
    <>
      <TopBackNav />
      <div id="IA_container">
        <img src={CameraBG} alt="카메라 배경" />
        {isDone && <DoneModal className={`${isDone && "setAni"}`} />}
        <div className="modal_box">
          <div className="top_box">송금할 금액을 입력해주세요</div>
          <div className="mid_box">
            <div>
              <input
                className="amount_input"
                onChange={(e) => {
                  const tempAmount = Number(e.target.value);
                  setAmount(tempAmount);
                }}
                value={amount}
                //  value={amount.toLocaleString("ko-KR")}
              />
              원
            </div>
          </div>
          <div className="bot_box">
            <div onClick={() => window.history.back()} className="left">
              취소
            </div>
            <div className="right" onClick={() => sendAll()}>
              송금하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputAmount;
