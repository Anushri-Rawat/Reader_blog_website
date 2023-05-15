import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import Form from "../../Form/Form";
import store from "../../../store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

const render = (component) =>
  rtlRender(<Provider store={store()}>{component}</Provider>);

test("should render form component", () => {
  render(<Form />);
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store()}>
        <Form />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
