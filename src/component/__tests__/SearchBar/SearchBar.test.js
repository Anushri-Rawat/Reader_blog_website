import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import SearchBar from "../../SearchBar/SearchBar";
import { Provider } from "react-redux";
import store from "../../../store";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

const render = (component) =>
  rtlRender(<Provider store={store()}>{component}</Provider>);

test("should render serachbar component", () => {
  render(<SearchBar />);
  expect(screen.getByTestId("search-bar")).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store()}>
        <SearchBar />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
