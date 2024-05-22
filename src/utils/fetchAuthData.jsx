import axios from "axios";

const fetchAuthData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/esgs");
    if (response.data && response.data.body) {
      return response.data.body;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("(ESG 활동 정보 불러오기 오류) Error fetching esgs data:", error);
    return null;
  }
};

export default fetchAuthData;
