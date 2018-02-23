import React from 'react';
import T from 'prop-types';

import logos from './logos';

export default function TeamLogo(props) {
  return (
    <svg {...props} x="0" y="0" viewBox="0 0 125.397 125.397">
      {logos[props.id]}
    </svg>
  );
}

TeamLogo.propTypes = {
  id: T.string.isRequired,
  width: T.string,
};

TeamLogo.defaultProps = {
  width: '200',
};
