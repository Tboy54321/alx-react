import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul").children()).toHaveLength(3);
    expect(notification.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(notification.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(notification.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("ul").children()).toHaveLength(3);
    notification.find("ul").forEach((i) => {
      expect(i.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").prop("children")).toBe("Here is the list of notifications");
  });
});