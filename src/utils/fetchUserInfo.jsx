import axios from "axios";

const fetchUserInfo = async (memberId) => {
  try {
    const response = await axios.get(`http://localhost:8080/members?memberId=${memberId}`);
    if (response.data) {
      //응답 데이터가 있음
      return response.data;
    } else {
      //없음
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("(사용자 정보 불러오기 오류) Error fetching user data:", error);
    return null;
    //에러시 null
  }
};

export default fetchUserInfo;
