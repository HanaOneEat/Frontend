import React from "react";

// 초기값 설정
const initialValue = {
  numberData: [
    { reviews: 132, count: 22, duration: 4 },
    { reviews: 48, count: 3, duration: 1 },
    { reviews: 1207, count: 38, duration: 13 },
    { reviews: 2402, count: 29, duration: 20 },
    { reviews: 29, count: 5, duration: 2 },
  ],
  updateNumberData: () => {}, // 빈 함수로 초기화
};

// Context 생성
const NumberInfos = React.createContext(initialValue);

export default NumberInfos;
