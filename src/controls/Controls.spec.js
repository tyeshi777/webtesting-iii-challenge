// Test away!
import React from "react";
import renderer from "react-test-renderer";
import Controls from "./Controls.js";
const controls = require("./Controls.js");

describe(<Controls />, () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
