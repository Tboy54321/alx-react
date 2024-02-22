import React from "react";
import App from "./App";
import { shallow } from 'enzyme';

// configure({adapter: new Adapter()});
describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
    });
  }
)