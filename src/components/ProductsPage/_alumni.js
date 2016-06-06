import React, { Component } from 'react';

/* stories */
import { ThirdStory } from './_third-story';
import { FourthStory } from './_fourth-story';

const RENTAL = [{
  prop: 'Purchase Frequency',
  val: 'Once a year, can purchase more of the home.',
}, {
  prop: 'Share Purchase Price',
  val: 'Purchase price based on independent index.',
}, {
  prop: 'Share Minimum Purchase Price',
  val: '90% of original purchase price basis',
}, {
  prop: 'Ownership Interest',
  val: 'Based on down-payment amounts',
}];

const PURCHASE = [{
  prop: 'Base Rent',
  val: 'Market rent',
}, {
  prop: 'Rent Discount/Premium',
  val: 'None',
}, {
  prop: 'Rent Increases',
  val: 'Assessed annually based on local index.',
}, {
  prop: 'Rent Increase Limit',
  val: 'No more than 20% every 3 years',
}, {
  prop: 'Rent Period',
  val: '5 years.  Resident can move out early but responsible for sublet.',
}, {
  prop: 'Repair Handling',
  val: 'Resident pays for minor repairs.  Major repairs paid by group.',
}];

const lisa = require('./files/lisa.jpg');
const marc = require('./files/marc.jpg');

export class Alumni extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showFirstStory: false,
      showSecondStory: false,
    };
  }

  render() {
    const { showFirstStory, showSecondStory } = this.state;

    {/*function renderTable(data) {
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
            Landed Advantage
          </p>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Diversified urban real estate portfolio without any work.
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Track payments and estimate taxes
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Ongoing support and independent mediator
              </p>
            </span>
          </div>
        </div>
      );
    }*/}

    return (
      <div className="container">
        <div className="row lease-and-shared">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              Investor Benefits
            </p>
            <ul>
              <li>
                Own a diversified urban real estate portfolio alongside owners you trust.
              </li>
              <li>
                Have a third-party monitor and manage the investments to make sure all the rules are followed.
              </li>
              <li>
                Sustainably help community members accelerate wealth building by becoming homeowners.
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              Landed Advantage
            </p>
            <ul>
              <li>
                <strong>Stay at arm's length.</strong> Don't put the relationship between community members at risk. 
              </li>
              <li>
                <strong>Stay compliant.</strong> Landed takes care of all regulatory and compliance infrastructure.
              </li>
              <li>
                <strong>Consistent investment terms.</strong> Through standard terms, Landed makes future liquidity possible.
              </li>
            </ul>
          </div>
        </div>

        {/*<div className="row terms">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <p className="title">
              Customizable terms
            </p>
            <p className="text">
              Our basic terms have been developed based on years of experience and reflect what an independent investor might accept.  Sign up to see how easy it can be to customize them!
            </p>
            <div className="hidden-xs hidden-sm">
              { renderLandedSupport() }
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 terms-table">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Ownership Agreement
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
                Lease
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
        </div>*/}

        {/*<div className="row examples">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="title">
              Customer Stories
            </p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: !showFirstStory ? true : false, showSecondStory: false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ lisa } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  <span className="story-title">
                    Stanford University<br />
                  </span>
                  Alumni Investing in Alumni
                  <br />
                  <span className="read">
                    Read the Stanford Story
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
                  <span className="story-title">
                    Kellogg MBA <br />
                  </span>
                  Community Partnership
                  <br />
                  <span className="read">
                    Read the Kellogg Story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className={`story ${showFirstStory && 'show'}`}>
              <ThirdStory />
            </div>
            <div className={`story ${showSecondStory && 'show'}`}>
              <FourthStory />
            </div>
          </div>
        </div>*/}


      </div>
    );
  }
}
