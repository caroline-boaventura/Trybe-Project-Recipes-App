import React from 'react';
import PropTypes from 'prop-types';
import MyConText from './Context';

function Provider({ children }) {
  return (
    <MyConText.Provider>
      { children }
    </MyConText.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
