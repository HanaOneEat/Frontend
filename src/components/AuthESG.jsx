import React, { useEffect, useState } from "react";
import TopBackNav from "./TopBackNav";
import fetchAuthData from "../utils/fetchAuthData";

const AuthESG = () => {
  const [inputStore, setInputStore] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputAbout, setInputAbout] = useState("");
  const [inputYear, setInputYear] = useState();
  const [inputMonth, setInputMonth] = useState();
  const [inputDate, setInputDate] = useState();
  const [inputFile, setInputFile] = useState([]);
  // const [errorMsg, setErrorMsg] = useState(false);
  const [allFilled, setAllFilled] = useState(false);

  const [maxDate, setMaxDate] = useState(0);

  const maxYear = 2024;

  const handleFileChange = (event) => {
    setInputFile(event.target.file);
  };

  const monthBit = 0b1010110101010; //1,3,5,7,8,10,12월 비트체킹
  useEffect(() => {
    if (inputMonth === 2) {
      if (inputYear % 4 === 0 && (inputYear % 100 !== 0 || inputYear % 400 === 0)) {
        setMaxDate(29);
      } else {
        setMaxDate(28);
      }
    } else if ((monthBit & (1 << inputMonth)) !== 0) {
      setMaxDate(31);
    } else {
      setMaxDate(30);
    }
  }, [inputYear, inputMonth]);

  useEffect(() => {
    if (
      inputStore !== "" &&
      inputTitle !== "" &&
      inputYear !== undefined &&
      inputMonth !== undefined &&
      inputDate !== undefined &&
      inputAbout !== ""
    ) {
      setAllFilled(true);
    }
  }, [inputTitle, inputYear, inputMonth, inputDate, inputAbout]);

  //axios
  const [isLoading, setIsLoading] = useState(false);
  const [esgData, setEsgData] = useState(null);
  useEffect(() => {
    const loadEsgData = async () => {
      setIsLoading(true);
      const resData = fetchAuthData();
      setEsgData(resData);
      setIsLoading(false);
    };

    //loadEsgData()
  }, []);

  return (
    <>
      <TopBackNav />
      <div id="AUTH_container" className="cont">
        <div>
          <div className="text_box">
            <div className="title">ESG 인증하기</div>
            <div className="subtext">ESG 활동을 인증하고 ESG 점수를 올려요</div>
          </div>
          <div className="content_box store_box">
            <div className="top_box">
              <div className="title">가게</div>
            </div>
            <div className={`bot_box ${inputStore.length > 0 ? "hasFilled" : ""}`}>
              <select>
                <option>-</option>
                <option>A</option>
                <option>A</option>
              </select>
            </div>
          </div>
          <div className="content_box name_box">
            <div className="top_box">
              <div className="title">활동명</div>
              <div className="sub_right">{inputTitle.length}/20</div>
            </div>
            <div className="bot_box">
              <input
                className={`input_title ${inputTitle.length > 0 ? "hasFilled" : ""}`}
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                placeholder="활동명을 입력해주세요"
                maxLength={20}
                required
              />
            </div>
          </div>
          <div className="content_box store_box">
            <div className="top_box">
              <div className="title">카테고리</div>
            </div>
            <div className={`bot_box ${inputCategory.length > 0 ? "hasFilled" : ""}`}>
              <select>
                <option>-</option>
                <option>A</option>
                <option>A</option>
              </select>
            </div>
          </div>
          <div className="content_box about_box">
            <div className="top_box">
              <div className="title">세부 사항</div>
              <div className="sub_right">{inputAbout.length}/100</div>
            </div>
            <div className="bot_box">
              <textarea
                className={`input_about ${inputAbout.length > 0 ? "hasFilled" : ""}`}
                value={inputAbout}
                onChange={(e) => setInputAbout(e.target.value)}
                maxLength={100}
                placeholder="세부 사항을 입력해 주세요"
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
              <input
                className={`date_input_box ${inputYear !== undefined ? "hasFilled" : ""}`}
                type="number"
                value={inputYear}
                placeholder="-"
                onChange={(event) => {
                  const tempYear = Number(event.target.value);
                  setInputYear(tempYear > maxYear ? maxYear : tempYear);
                }}
                id="year"
              />
              <label className="label_box" for="year">
                년
              </label>
              <input
                className={`date_input_box ${inputMonth !== undefined ? "hasFilled" : ""}`}
                type="number"
                value={inputMonth}
                placeholder="-"
                onChange={(event) => {
                  const tempMonth = Number(event.target.value);
                  setInputMonth(tempMonth > 12 ? 12 : tempMonth);
                }}
              />
              <label className="label_box" for="month">
                월
              </label>
              <input
                className={`date_input_box ${inputDate !== undefined ? "hasFilled" : ""}`}
                type="number"
                value={inputDate}
                placeholder={inputMonth > 0 ? maxDate : "-"}
                onChange={(event) => {
                  const tempDate = Number(event.target.value);
                  setInputDate(tempDate > maxDate ? maxDate : tempDate);
                }}
              />
              <label className="label_box" for="date">
                일
              </label>
            </div>
          </div>
          <div className="content_box file_box">
            <div className="top_box">
              <div className="title">
                첨부파일
                {/* {errorMsg && <div className="errorMsg">최대 3개 파일까지 가능합니다.</div>} */}
              </div>
              {/* <div className="sub_right">{inputFile.length}/3</div> */}
            </div>
            <div className={`bot_box ${inputFile ? "" : "hasFilled"}`}>
              <input
                type="file"
                onChange={handleFileChange}
                // multiple
              />
            </div>
          </div>
        </div>

        <div className="upload_button_container">
          <button type="submit" disabled={!allFilled}>
            등록
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthESG;
