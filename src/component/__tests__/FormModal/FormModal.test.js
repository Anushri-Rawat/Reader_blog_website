import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import FormModal from "../../FormModal/FormModal";
import store from "../../../store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

const render = (component) =>
  rtlRender(<Provider store={store()}>{component}</Provider>);

test("should render formModal component", () => {
  render(<FormModal />);
  const formModalElement = screen.getByTestId("modal");
  expect(formModalElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store()}>
        <FormModal />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
