import React, { Component } from 'react';
import R from 'ramda';

/* images */
const icons = R.range(1, 3 + 1).map(index => require(`./files/about-${index}.png`));

export class ThreeCols extends Component {
  render() {
    return (
      <div className="container">
        <div className="row threeCol">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[0] } />
            <p>
              Instead of a bank that gets its money back no matter what, co-investors will share in both the ups and downs with you.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[1] } />
            <p>
              50% to 60% of new home buyers couldn’t have purchased without parental support.  Co-investors help you get into your home sooner.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[2] } />
            <p>
              Instead of leaving you to fend for yourself in a new home with new challenges, Landed and your co-investors are here to support you.
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
