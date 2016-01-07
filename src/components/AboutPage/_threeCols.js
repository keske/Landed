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

              <p className="paragraph green">
               The system is rigged.


              </p>

            <p>
              Nobody can responsibly buy their first home by themselves, even with a&nbsp;supportive bank. <br /><br />

Without gifts or investment partners, millions of Americans are making excessively risky investment decisions that the bankers themselves would never make.

            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[1] } />
              <p className="paragraph green">
               Together, there is another way.


              </p>


            <p>
              Joining forces to pay for home is extremely hard, but it doesn’t have to be.  <br /><br />

We work with banks, title companies, insurers, lawyers and brokers to keep the hard parts about joining forces simple.

            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[2] } />

              <p className="paragraph green">
               Less vulnerability, more wealth.


              </p>
            <p>
              We hope that joining forces becomes so easy that anyone can pitch in.  <br /><br />

Until then, we’ll keep working to reduce barriers to wealth building and make people less financially vulnerable.

            </p>
          </div>
        </div>

        {/*<div className="row threeCol paragraphs">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 text-center">
            <p className="paragraph middle">
              For investors, we’re an easier way to invest in people and places you care about. Landed is working towards democratizing these investments, making urban real estate accessible for those of us who aren’t millionaires.
            </p>
          </div>
        </div>*/}
      </div>
    );
  }
}
