import React from "react";
import renderer from "react-test-renderer";
import Snapshot from "../Snapshot";

test("Snapshot renders correctly", () => {
  let tree = renderer.create(<Snapshot text={"Hello"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
