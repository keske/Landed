import React, { Component } from 'react';

/* stories */
import { FirstStory } from './_first-story';
import { SecondStory } from './_second-story';

const RENTAL = [{
  prop: 'Base Rent',
  val: 'Market rent',
}, {
  prop: 'Rent Discount/Premium',
  val: 'None',
}, {
  prop: 'Rent Increases',
  val: 'Assessed annually based on local index. ',
}, {
  prop: 'Rent Increase Limit',
  val: 'No more than 20% every 3 years.',
}, {
  prop: 'Rent Period',
  val: '5 years.  Resident can move out early but responsible for sublet.',
}, {
  prop: 'Repair Handling',
  val: 'Resident pays for minor repairs.  Major repairs paid by investor.',
}];

const PURCHASE = [{
  prop: 'Purchase Timeline',
  val: 'Can purchase after 2 years with 90 days notice.',
}, {
  prop: 'Purchase Price',
  val: 'Purchase price based on independent index.',
}, {
  prop: 'Minimum Purchase Price',
  val: '90% of original purchase price.',
}];

const jenifer = require('./files/jen.png');
const marc = require('./files/marc.png');

export class Lease extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showFirstStory: false,
      showSecondStory: false,
    };
  }

  render() {
    const { showFirstStory, showSecondStory } = this.state;

    function renderTable(data) {
      return data.map((field, key) =>
        <div className="row"
             key={ key }>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
            <p className="field-prop">
              { field.prop }
            </p>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
            <p className="field-val">
              { field.val }
            </p>
          </div>
        </div>
      );
    }

    function renderLandedSupport() {
      return (
        <div className="landed-support">
          <p className="title">
            Landed Support
          </p>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Help finding you an investor
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Simple, intuitive legal forms
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                On-going support and independent advisor
              </p>
            </span>
          </div>
        </div>
      );
    }

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
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">1.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  A long-term rent agreement that provides security to both the owner and the renter.  This commits both the investor and the resident to the space for 5 years.  For this commitment, the investor agrees to give the resident the same experience they would have in their own home.
                </p>
              </div>
            </div>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">2.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  An option to buy back the property from the investor.  In exchange to committing the home long-term, the resident is given an option to buy the property any time after two years.
                </p>
              </div>
            </div>

          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1">
            <p className="ul-title">
              For Residents
            </p>
            <ul>
              <li>
                Live like a homeowner with no fear of landlord eviction.
              </li>
              <li>
                Invest in your space knowing you'll own it.
                { /* ' */ }
              </li>
              <li>
                No rent premiums or confusing option fees found in many rent-to-own contracts.
              </li>
            </ul>

            <p className="ul-title">
              For Investors
            </p>
            <ul>
              <li>
                Simple rental investment with tax advantages and simple access to financing.
              </li>
              <li>
                A trusted, committed resident who takes care of your investment.
              </li>
              <li>
                More options available if residents can no longer pay.
              </li>
            </ul>
          </div>
        </div>

        <div className="row terms">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <p className="title">
              Customizable terms
            </p>
            <p className="text">
              Our basic terms have been developed based on years of experience and reflect what an independent investor would accept.  Sign up to see how easy it can be to customize them!
            </p>
            <div className="hidden-xs hidden-sm">
              { renderLandedSupport() }
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 terms-table">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Rental Agreement
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Recommended Default
              </p>
            </div>
            { renderTable(RENTAL) }

            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Purchase Option
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Recommended Default
              </p>
            </div>
            { renderTable(PURCHASE) }
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="hidden-md hidden-lg">
              { renderLandedSupport() }
            </div>
          </div>
        </div>

        <div className="row examples">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="title">
              Examples
            </p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: !showFirstStory ? true : false, showSecondStory: false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ jenifer } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  <p className="story-title">
                    Diego
                  </p>
                  Finding a Better Rental Home
                  <br />
                  <span className="read">
                    Read Diego’s story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: false, showSecondStory: !showSecondStory ? true : false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ marc } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showSecondStory && 'active'}`}>
                  <p className="story-title">
                    Jennifer
                  </p>
                  Avoiding High FHA Rates
                  <br />
                  <span className="read">
                    Read Jennifer’s story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className={`story ${showFirstStory && 'show'}`}>
              <FirstStory />
            </div>
            <div className={`story ${showSecondStory && 'show'}`}>
              <SecondStory />
            </div>
          </div>
        </div>


      </div>
    );
  }
}
