import React from "react";
import userData from "../../utils";
import { useDispatch } from "react-redux";
import "./styles.css";

const BlogCard = ({ data }) => {
  const dispatch = useDispatch();

  if (!data || Object.keys(data).length === 0)
    return <p data-testid="card">No data in blog to post</p>;

  return (
    <div
      className="border-bottom"
      style={{ marginTop: "24px" }}
      data-testid="card"
    >
      <div
        className="d-flex align-items-center gap-3"
        style={{ marginBottom: "1rem" }}
      >
        <img
          className="rounded-circle"
          src={userData[data.userId - 1].image}
          alt="user-img"
          style={{ width: "48px", height: "48px" }}
        />
        <div className="d-flex flex-column user-info">
          <div className="d-flex gap-1 align-items-center">
            <span>{userData[data.userId - 1].name}</span>
            <span className="fs-4 fw-bolder mb-2 d-none d-sm-block">.</span>
            <span className="d-none d-sm-block">
              @{userData[data.userId - 1].username}
            </span>
            <span className="fs-4 fw-bolder mb-2">.</span>
            <span>May 13</span>
          </div>
          <p className="mb-0">{userData[data.userId - 1].catchPhrase}</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h2 className="card-heading">{data.title}</h2>
        <p className="mb-0">{data.body}</p>
      </div>
      <div
        style={{ padding: "32px 0" }}
        className="d-flex justify-content-between"
      >
        <div className="d-flex gap-3 align-items-center">
          <button
            className="border-0"
            style={{ padding: "2px 20px", borderRadius: "100px" }}
          >
            React
          </button>
          <span className="text-secondary">4 min read</span>
        </div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch({ type: "DELETE_POST", payload: data })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
