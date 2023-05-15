import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "./actions";
import Header from "./component/Header/Header";
import FormModal from "./component/FormModal/FormModal";
import Main from "./component/Main/Main";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <FormModal />
    </div>
  );
}

export default App;
