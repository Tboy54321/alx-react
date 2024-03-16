import React from "react"
import { shallow } from enzyme
import Login from "./Login"

describe('Rendering Login elements', () => {
  it('rendering the login page', () => {
    const component = shallow(<Login />);
    expect(component.exits()).toEqual(true);
  });
  it('return 2 input tags and 2 label tags', () => {
    const component = shallow(<Login />);
    expect(component.find("img")).toHaveLength(2);
    expect(component.find("input")).toHaveLength(2);
  });
})
