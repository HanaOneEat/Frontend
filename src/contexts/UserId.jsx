import React from "react";

// 초기값 설정
const initialValue = {
  userId: 1,
  updateUserId: (value) => {
    this.userId = value;
  },
};

// Context 생성
const UserId = React.createContext(initialValue);

export default UserId;
