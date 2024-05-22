import axios from "axios";

const sendMoney = async (toId, amount) => {
  try {
    const response = await axios.post("http://localhost:8080/hana-money/transfer", {
      toId,
      amount,
    });
    // if (response.data) {
    //   //응답 데이터가 있음
    //   // console.log(response.data);
    //   // return response.data;
    // } else {
    // throw new Error("Invalid response structure");
    // }
  } catch (error) {
    console.error("(송금 오류) Error fetching store of user data:", error);
    return null;
  }
};

export default sendMoney;
