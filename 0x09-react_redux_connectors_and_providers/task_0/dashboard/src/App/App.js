import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

// Existing imports and component code...

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn')
  };
};

const App = ({ isLoggedIn }) => {
  // Render your component based on isLoggedIn
  return (
    <div>
      {/* Your existing component rendering */}
    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
