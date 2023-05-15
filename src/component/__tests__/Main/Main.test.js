import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import store from "../../../store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Main from "../../Main/Main";
// import { fetchAllPosts } from "../../../actions";

// jest.mock("../../../actions");

afterEach(() => {
  cleanup();
});

const render = (component) =>
  rtlRender(<Provider store={store()}>{component}</Provider>);

test("should render Main component", () => {
  render(<Main />);
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
});

test("should render searchbar(child) component", () => {
  const { getByTestId } = render(<Main />);
  expect(getByTestId("search-bar")).toBeInTheDocument();
});

test("should render form(child) component", () => {
  const { getByTestId } = render(<Main />);
  expect(getByTestId("form")).toBeInTheDocument();
});

// test("should render BlogCard(child) component", async () => {
//   fetchAllPosts.mockResolvedValueOnce({ listToDisplay: posts });
//   const { getByTestId } = render(<Main />);
//   await wait(() => expect(getByTestId("card")).toBeInTheDocument());
//   expect(fetchAllPosts).toHaveBeenCalledOnce();
// });

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store()}>
        <Main />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
