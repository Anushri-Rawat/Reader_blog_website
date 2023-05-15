import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import BlogCard from "../../BlogCard/BlogCard";
import store from "../../../store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

const render = (component) =>
  rtlRender(<Provider store={store()}>{component}</Provider>);

const post = {
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  userId: 1,
};

test("should render blogCard component with data", () => {
  render(<BlogCard data={post} />);
  const blogCardElement = screen.getByTestId("card");
  expect(blogCardElement).toBeInTheDocument();
});

test("should render blogCard component with no data", () => {
  render(<BlogCard data={{}} />);
  const blogCardElement = screen.getByTestId("card");
  expect(blogCardElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store()}>
        <BlogCard data={post} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
