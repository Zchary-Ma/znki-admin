import React, { FC } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NotFound.styles';

const NotFound: FC = (props) => (
  <div className="NotFoundWrapper">
    <code>NOT FOUND</code>
  </div>
);

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
