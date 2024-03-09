import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("render without crashing", () => {
    const component = shallow(<Header />);
    expect(component.exists()).toEqual(true);
  });
  it("render an h1 and img element", () => {
    const component = shallow(<Header />);
    expect(component.exists("img")).toEqual(true);
    expect(component.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});