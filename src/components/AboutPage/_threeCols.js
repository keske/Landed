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
              Co-investors help you build wealth sooner. Start building partial home wealth with as little as 5% down.
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
              For investors, we’re an easier way to invest in people and places you care about. Landed is working towards democratizing these investments, making urban real estate accessible for those of us who aren’t millionaires.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
