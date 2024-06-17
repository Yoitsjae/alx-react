import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const Footer = ({ user }) => {
  return (
    <div>
      {/* Your existing component rendering */}
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(Footer);
