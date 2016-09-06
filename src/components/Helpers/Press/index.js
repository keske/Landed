import React from 'react';

// Images
const tc = require('./files/tc.png');
const mvv = require('./files/mvv.png');
const tmn = require('./files/tmn.png');
const svbj = require('./files/svbj.png');
const builder = require('./files/builder.png');
const sb = require('./files/sb.png');

// Styles
import s from './index.css';

const Press = () => (
  <div className={s.root}>
    <img src={tc} role="presentation" />
    <img src={mvv} role="presentation" />
    <img src={tmn} role="presentation" />
    <img src={svbj} role="presentation" />
    <img src={builder} role="presentation" />
    <img src={sb} role="presentation" />
  </div>
);

export default Press;
