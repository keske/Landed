import React, { Component } from 'react';

/* stories */
import { FirstStory } from './_first-story';
import { SecondStory } from './_second-story';

const RENTAL = [{
  prop: 'Investment Percentage',
  val: '50% of a standard down payment.',
}, {
  prop: 'Partnership Terms',
  val: 'For every dollar the property changes in value (up or down), the Landed fund will share 25 cents.',
}, {
  prop: 'Expiration',
  val: '7 years. Homeowner must then refinance and pay-off the investment.',
}, {
  prop: 'Investor Protection',
  val:  'Can force a sale in the case of default.',
}, {
  prop: 'Repair Handling',
  val: 'Homeowner handles all repairs.',
/*  prop: 'Base Rent',
  val: 'Market rent.',
}, {
  prop: 'Rent Discount/Premium',
  val: 'None.',
}, {
  prop: 'Rent Increases',
  val: 'Assessed annually based on local rent index. ',
}, {
  prop: 'Rent Increase Limit',
  val: 'No more than 20% every 3 years.',
}, {
  prop: 'Rent Period',
  val: '5 years.  Resident can move out early but responsible for sublet.',
}, {
  prop: 'Repair Handling',
  val: 'Resident pays for minor repairs.  Major repairs paid by investor.',
*/
}];

const PURCHASE = [{
  prop: 'Buy-Out Timeline',
  val: 'Can buy out the Landed support at any time without a sale, after 1 year.',
}, {
  prop: 'Early Buy-Out Price',
  val: 'Buy-out price based on professional appraisal.',
}];

const diego = require('./files/diego.jpg');
const jennifer = require('./files/jennifer.jpg');


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
                Legal and compliance infrastructure
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Investor dashboards and reporting
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Ongoing support and mediation
              </p>
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row lease-and-shared">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              For Residents
            </p>
            <ul>
              <li>
                Become a homeowner, earlier, without as much debt.
              </li>
              <li>
                Make no monthly payments on the support.
              </li>
              <li>
                Have complete security of payments for the next 7 years.
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              For Investors
            </p>
            <ul>
              <li>
                Co-invest in property with a committed resident.
              </li>
              <li>
                Avoid co-signing a mortgage or splitting expenses.
              </li>
              <li>
                Achieve rental property returns without any of the work.
              </li>
            </ul>
          </div>
        </div>

        <div className="row terms">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <p className="title">
              Standard terms
            </p>
            <p className="text">
              Our basic terms have been developed based on years of experience and reflect what an independent investor might accept.
            </p>
            <div className="hidden-xs hidden-sm">
              { renderLandedSupport() }
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 terms-table">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Option Terms
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Example
              </p>
            </div>
            { renderTable(RENTAL) }

            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Buy-Out Terms
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Example
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
                <img src={ diego } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  
                  <span className="story-title">
                    Diego
                      <br />

                  </span>
                  Getting help from alumni.
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
                <img src={ jennifer } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showSecondStory && 'active'}`}>
                  <span className="story-title">
                    Jennifer
                    <br />
                  </span>
                  Fair deal from her employer.
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
