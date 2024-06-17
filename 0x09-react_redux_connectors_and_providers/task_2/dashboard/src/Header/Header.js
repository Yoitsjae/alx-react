import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

const Header = ({ user, logout }) => {
  return (
    <div>
      {/* Your existing component rendering */}
      <a href="#" onClick={logout}>Logout</a>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
