import React from "react"
import { shallow } from enzyme
import Login from "./Login"

describe('Rendering Login elements', () => {
  it('rendering the login page', () => {
    const component = shallow(<Login />);
    expect(compenent.exits()).toEqual(true);
  });
  it('return input and label tags', () => {
    const component = shallow(<Login />);

    expect(component.exists("img")).toEqual(true)
  })
  
})
