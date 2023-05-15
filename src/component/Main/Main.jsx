import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import BlogCard from "../BlogCard/BlogCard";
import Form from "../Form/Form";
import "./styles.css";

const Main = () => {
  const { posts } = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("");
  let listToDisplay = posts;

  if (searchQuery !== "") {
    listToDisplay = posts.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        item.body.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    });
  }

  return (
    <main style={{ padding: "1.8% 3%" }} className="d-flex" data-testid="main">
      <div style={{ width: "100%" }}>
        <SearchBar setSearchQuery={setSearchQuery} />
        <div className="border-bottom title">Articles</div>
        <div className="articles-container">
          {listToDisplay.length > 0 ? (
            listToDisplay?.map((item, i) => <BlogCard key={i} data={item} />)
          ) : (
            <p>No result found!!</p>
          )}
        </div>
      </div>
      <div
        className="border-bottom d-none d-md-block"
        style={{ minWidth: "350px", paddingLeft: "1.5rem" }}
      >
        <Form />
      </div>
    </main>
  );
};

export default Main;
