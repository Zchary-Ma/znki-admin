import React, { FC } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Dashboard.styles';

const Dashboard: FC = (props) => (
  <div className="DashboardWrapper">Dashboard content</div>
);

Dashboard.propTypes = {
  // bla: PropTypes.string,
};

Dashboard.defaultProps = {
  // bla: 'test',
};

export default Dashboard;
