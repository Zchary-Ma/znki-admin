import React, { FC } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './CardPage.styles';

const CardPage: FC = (props) => (
  <div className="CardPageWrapper">Card content</div>
);

CardPage.propTypes = {
  // bla: PropTypes.string,
};

CardPage.defaultProps = {
  // bla: 'test',
};

export default CardPage;
