import React from 'react';

// Images
const ulu = require('./files/ulu.png');
const yc = require('./files/yc.png');
const s28 = require('./files/s28.png');
const czi = require('./files/czi.png');
const drk = require('./files/drk.png');

// Styles
import s from './index.css';

const Investors = () => (
  <div className={s.root}>
    <img src={ulu} role="presentation" />
    <br />
    <img src={yc} role="presentation" />
    <br />
    <img src={s28} role="presentation" />
    <br />
    {/*<img src={czi} role="presentation" />
    <br />*/}
    <img src={drk} role="presentation" />
  </div>
);

export default Investors;
