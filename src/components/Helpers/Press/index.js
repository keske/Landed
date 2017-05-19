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
    <a href="https://techcrunch.com/2016/03/22/y-combinator-demo-day-winter-2016/" target="_blank"><img src={tc} role="presentation" /></a>
    <br />
    <a href="https://mv-voice.com/news/2016/07/14/new-startup-could-help-teachers-buy-bay-area-homes" target="_blank"><img src={mvv} role="presentation" /></a>
    <br />
    <a href="http://www.mercurynews.com/2016/07/30/startup-among-latest-efforts-to-help-teachers-afford-bay-area-housing-2/" target="_blank"><img src={tmn} role="presentation" /></a>
    <br />
    <a href="http://www.bizjournals.com/sanjose/blog/techflash/2016/03/meet-29-bay-area-startups-who-pitched-at-tuesdays.html" target="_blank"><img src={svbj} role="presentation" /></a>
    <br />
    <a href="http://www.builderonline.com/money/mortgage-finance/startup-among-latest-efforts-to-help-teachers-afford-bay-area-housing_c" target="_blank"><img src={builder} role="presentation" /></a>
    <br />
    <a href="https://www.gsb.stanford.edu/insights/alex-lofton-there-chance-you-will-fail" target="_blank"><img src={sb} role="presentation" /></a>
  </div>
);

export default Press;
