import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({ type: "START_LOADING" });
  const url = `${BASE_URL}/posts`;
  const response = await axios.get(url);
  dispatch({ type: "FETCH_ALL_POSTS", payload: response.data });
  localStorage.setItem("posts", JSON.stringify(response.data));
  dispatch({ type: "END_LOADING" });
};
