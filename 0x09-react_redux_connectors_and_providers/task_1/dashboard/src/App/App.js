import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const App = ({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) => {
  // Render your component based on isLoggedIn and displayDrawer
  return (
    <div>
      {/* Your existing component rendering */}
    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
