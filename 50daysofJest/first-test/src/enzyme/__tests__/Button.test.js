import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

test("Button renders correctly", () => {
  const wrapper = shallow(<Button label="Click me" />);
  expect(wrapper.text()).toBe("Click Me");
});

test("Button handles click events", () => {
  const mockClick = jest.fn();
  const wrapper = shallow(<Button label="Click Me" onClick={mockClick} />);
  wrapper.simulate("click");
  expect(mockClick).toHaveBeenCalled();
});
