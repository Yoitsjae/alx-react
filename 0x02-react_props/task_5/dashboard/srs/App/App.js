// task_5/dashboard/src/App/App.js

import React from 'react';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';
import CourseShape from '../CourseList/CourseShape';
import NotificationItemShape from '../Notifications/NotificationItemShape';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      displayDrawer: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    const { listCourses, listNotifications } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          {isLoggedIn ? (
            <CourseList listCourses={listCourses} />
          ) : (
            <div className="App-login">Login to access the course dashboard</div>
          )}
        </div>
        <div className="App-body">
          <Notifications displayDrawer={this.state.displayDrawer} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  listCourses: [],
  listNotifications: [],
};

App.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default App;
