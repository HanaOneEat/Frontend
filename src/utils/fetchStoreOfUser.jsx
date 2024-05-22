import axios from "axios";

const fetchStoreOfUser = async (memberId) => {
  try {
    const response = await axios.get(`http://localhost:8080/store/my-store?memberId=${memberId}`);
    if (response.data) {
      //응답 데이터가 있음
      return response.data;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("(사용자 보유 매장 불러오기 오류) Error fetching store of user data:", error);
    return null;
  }
};

export default fetchStoreOfUser;
