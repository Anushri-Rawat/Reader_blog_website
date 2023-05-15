import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import _ from "lodash";

const SearchBar = ({ setSearchQuery }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return _.debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <div
      className="d-flex justify-content-between align-items-center searchBar-container"
      data-testid="search-bar"
    >
      <input
        className="search-bar"
        type="search"
        placeholder="Search"
        onChange={debouncedResults}
      />
      <select
        className="sort-container"
        onChange={(e) => {
          dispatch({ type: "SORT_POSTS", payload: e.target.value });
        }}
      >
        <option value="id">Id</option>
        <option value="title">Title</option>
        <option value="userId">User Id</option>
      </select>
    </div>
  );
};

export default SearchBar;
