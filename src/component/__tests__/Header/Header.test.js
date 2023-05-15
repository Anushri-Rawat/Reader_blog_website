import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import Header from "../../Header/Header";
import store from "../../../store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

const render = (component) =>
  rtlRender(<Provider store={store()}>{component}</Provider>);

test("should render header component", () => {
  render(<Header />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store()}>
        <Header />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
