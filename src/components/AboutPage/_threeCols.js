import React, { Component } from 'react';

import oval from './files/oval.png';

export class ThreeCols extends Component {
  render() {
    return (
      <div>
        <div className="row threeCol">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ oval } />
            <p>
              Instead of a bank that gets its money back no matter what, we share in the ups and downs with you.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ oval } />
            <p>
              Instead of a bank that gets its money back no matter what, we share in the ups and downs with you.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ oval } />
            <p>
              Instead of a bank that gets its money back no matter what, we share in the ups and downs with you.
            </p>
          </div>
        </div>

        <div className="row threeCol paragraphs">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 text-center">
            <p>
              That way, you can get the home you want without all the risk. It’s a way for you to get some of your wealth out of the real estate market and watch it grow sustainably.
            </p>
            <p>
              For investors, we’re an easier way for you to invest in a local neighborhood with promise. Landed will soon launch a marketplace for everyone to invest at a reasonable price point, making urban real estate accessible even for those of us who aren’t millionaires.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
