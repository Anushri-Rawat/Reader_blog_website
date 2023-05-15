const posts = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_ALL_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload.id),
      };
    case "SORT_POSTS":
      return {
        ...state,
        posts: state.posts.sort((a, b) => {
          if (action.payload === "title")
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
          else return a.id - b.id;
        }),
      };
    default:
      return { ...state };
  }
};

export default posts;
