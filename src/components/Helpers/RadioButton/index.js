import React, { PropTypes } from 'react';
import cx from 'classnames';

// Styles
import s from './index.css';

const RadioButton = ({ text, active, onClick }) => (
  <div
    className={s.root}
    onClick={onClick}
  >
    <span className={cx(s.circle, { [s.active]: active })} />
    <span className={s.text}>
      {text}
    </span>
  </div>
);

RadioButton.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default RadioButton;
