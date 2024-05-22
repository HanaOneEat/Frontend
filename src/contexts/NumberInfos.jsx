import React from "react";

// 초기값 설정
const initialValue = {
  numberData: [
    { reviews: 1423, count: 42, duration: 15 },
    { reviews: 525, count: 13, duration: 5 },
    { reviews: 92, count: 10, duration: 6 },
    { reviews: 2402, count: 103, duration: 22 },
    { reviews: 104, count: 30, duration: 12 },
  ],
  updateNumberData: () => {}, // 빈 함수로 초기화
};

// Context 생성
const NumberInfos = React.createContext(initialValue);

export default NumberInfos;
