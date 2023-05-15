import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_POST",
      payload: { userId, id: posts.length, title, body },
    });
  };

  return (
    <form
      className="d-flex flex-column gap-3"
      data-testid="form"
      onSubmit={submitHandler}
    >
      <h2 className="title mt-0">Add Blog</h2>
      <div className="row align-items-center">
        <div className="col-md-3">
          <label htmlFor="userId">User Id</label>
        </div>
        <div className="col-md-9">
          <select
            name="UserId"
            id="userId"
            className="form-input"
            onChange={(e) => setUserId(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-3">
          <label htmlFor="title">Title</label>
        </div>
        <div className="col-md-9">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-3">
          <label htmlFor="body">Body</label>
        </div>
        <div className="col-md-9">
          <textarea
            type="text"
            id="body"
            rows={5}
            placeholder="Body"
            className="form-input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-dark rounded-0">Add Blog</button>
    </form>
  );
};

export default Form;
