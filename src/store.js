import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import posts from "./reducers";

const initialState = {
  loading: false,
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const store = () =>
  createStore(posts, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
