import React, { useEffect, useState } from "react";

const AuthESG = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState();
  const [inputAbout, setInputAbout] = useState("");
  const [inputFile, setInputFile] = useState([]);

  const [errorMsg, setErrorMsg] = useState(false);

  const handleFileChange = (event) => {
    const getFiles = event.target.files;
    if (getFiles.length > 3) {
      setInputFile([]);
      setErrorMsg(true);
    } else {
      setInputFile(Array.from(event.target.files));
    }
  };

  return (
    <div id="AUTH_container">
      <div className="text_box">
        <div className="title">ESG 인증하기</div>
        <div className="subtext">ESG 활동을 인증하고 ESG 점수를 올려요</div>
      </div>
      <div className="content_box name_box">
        <div className="top_box">
          <div className="title">활동명</div>
          <div className="sub_right">{inputTitle.length}/20</div>
        </div>
        <div className="bot_box">
          <input
            className="input_title"
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="활동명을 입력해주세요"
            maxLength={20}
            required
          />
        </div>
      </div>
      <div className="content_box date_box">
        <div className="top_box">
          <div className="title">날짜</div>
          <div className="sub_right"></div>
        </div>
        <div className="bot_box">
          <input className="input_date" type="date" value={inputDate} required />
        </div>
      </div>
      <div className="content_box about_box">
        <div className="top_box">
          <div className="title">세부 사항</div>
          <div className="sub_right">{inputAbout.length}/100</div>
        </div>
        <div className="bot_box">
          <input
            className="input_about"
            type="text"
            value={inputAbout}
            onChange={(e) => setInputAbout(e.target.value)}
            placeholder="세부 사항을 입력해주세요"
            maxLength={100}
            required
          />
        </div>
      </div>
      <div className="content_box attach_box">
        <div className="top_box">
          <div className="title">첨부파일</div>
          <div className="sub_right">{inputFile.length}/3</div>
        </div>
        <div className="bot_box">
          <input type="file" onChange={handleFileChange} multiple />
        </div>
      </div>
    </div>
  );
};

export default AuthESG;
