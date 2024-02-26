import React from "react";
import App from "./App";
// import Login from "../Login/Login";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
    });
  }
)