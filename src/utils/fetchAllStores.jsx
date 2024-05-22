import axios from "axios";

const fetchAllStores = async () => {
  try {
    const response = await axios.get("http://localhost:8080/store/list");
    if (response.data) {
      //응답 데이터가 있음
      return response.data;
    } else {
      //없음
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("(모든 가게 정보 불러오기 오류) Error fetching all store data:", error);
    return null;
    //에러시 null
  }
};

export default fetchAllStores;
