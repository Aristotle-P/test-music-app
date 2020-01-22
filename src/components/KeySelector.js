import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import functions from '../helper/utils';

const handleClick = e => {
  e.preventDefault();
  functions.getMajorScale(e.target.value);
  functions.getDorianScale(e.target.value);
  functions.getPhrygianScale(e.target.value);
  functions.getLydianScale(e.target.value);
  functions.getMixolydianScale(e.target.value);
  functions.getMinorScale(e.target.value);
  functions.getLocrianScale(e.target.value);
};

const KeySelector = ({ note }) => {
  return (
    <div>
      <button value={note} onClick={handleClick}>
        {note}
        {user.name}
      </button>
    </div>
  );
};

KeySelector.propTypes = {
  note: PropTypes.string
};
export default KeySelector;
