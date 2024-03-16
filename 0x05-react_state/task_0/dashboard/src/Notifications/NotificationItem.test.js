import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    component = shallow(<NotificationItem />);

    expect(component.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const component = shallow(<NotificationItem />);

    component.setProps({ type: "default", value: "test" });
    expect(component.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const component = shallow(<NotificationItem />);

    component.setProps({ html: "<u>test</u>" });
    expect(component.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});