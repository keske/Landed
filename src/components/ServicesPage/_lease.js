import React, { Component } from 'react';

export class Lease extends Component {
  render() {
    return (
      <div className="container">
        <div className="row lease-and-shared">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="small-title">
              service 1
            </p>
            <p className="title">
              Lease Until You Buy
            </p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <p className="text">
              Typical rent-to-own contracts have a bad reputation.  Traditionally, an upfront option fee is paid as well as a monthly rent premium that eventually goes towards an inflated home purchase price.  Sadly, the reality is that many buyers never exercise their right to buy and all those additional fees go straight to the landlord’s pocket.  We don’t think that’s fair.
            </p>

            <p className="italic-block small-title">
              More typically known as a lease-option agreement, our contract involves two main parts:
            </p>

            <div className="list">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 text-right">
                <span className="list-number">1.</span>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
                <p>
                  A long-term rent agreement that provides security to both the owner and the renter.  This commits both the investor and the resident to the space for 5 years.  For this commitment, the investor agrees to give the resident the same experience they would have in their own home.
                </p>
              </div>
            </div>

            <div className="list">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 text-right">
                <span className="list-number">2.</span>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
                <p>
                  An option to buy back the property from the investor.  In exchange to committing the home long-term, the resident is given an option to buy the property any time after two years.
                </p>
              </div>
            </div>

          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-offset-1 col-lg-offset-1">
            <p className="ul-title">
              For Residents
            </p>
            <ul>
              <li>
                Can find your own space
              </li>
              <li>
                Much more control than traditional rental
              </li>
              <li>
                No fear of landlord eviction.
              </li>
              <li>
                Can invest in your space knowing you can always choose to own it.
              </li>
              <li>
                No rent premiums or option fees.   Can save for purchase independently.
              </li>
              <li>
                Simpler than partial ownership.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
