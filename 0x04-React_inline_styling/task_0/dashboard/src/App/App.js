import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.isloggedOut = this.isloggedOut.bind(this);
  }
    listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotification() },
    ];

    isloggedOut(e) {
      if (e.ctrlKey && e.key === "h") {
        alert("Logging you out");
        this.props.logout();
      }
    }
    
    componentDidMount() {
      document.addEventListener("keydown", this.isloggedOut)
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", this.isloggedOut)
    }

    render() {
      return (
        <React.Fragment>
          <div className="App">
            <div className="heading-section">
              <Notifications listNotifications={this.props.listNotifications} />
              <Header />
            </div>
            {this.props.isLoggedIn ? 
              (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
                
                ) : (
                  <BodySectionWithMarginBottom title="Log in to continue">
                    <Login />
                  </BodySectionWithMarginBottom>
              )
              }
              <BodySectionWithMarginBottom title="News from the School">
                <p>Another paragraph</p>
              </BodySectionWithMarginBottom>
            <Footer />
          </div>
        </React.Fragment>
      );
    };
  }

App.defaultProps = {
  isLoggedIn: true,
  logout: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

export default App;