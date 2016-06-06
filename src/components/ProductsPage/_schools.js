import React, { Component } from 'react';

/* stories */
import { FifthStory } from './_fifth-story';
import { SixthStory } from './_sixth-story';

const RENTAL = [{
  prop: 'Interest Rate',
  val: 'Minimum allowable interest (as determined by applicable federal rate)',
}, {
  prop: 'Annual Loan Forgiveness',
  val: 'None (maximum of $14,000 per loan, per year to limit gift tax liabilities)',
}, {
  prop: 'Amortization Term',
  val: '30 years',
}, {
  prop: 'Loan Term',
  val: '30 years',
}, {
  prop: 'Loan Position',
  val: 'Second lien loan',
}, {
  prop: 'Late Penalty',
  val: '3% of regular payment',
}, {
  prop: 'Payment Due Clauses',
  val: 'Principal due in the case of borrower divorce',
}];

const mikael = require('./files/mikael.jpg'); //NOT ADJUSTED
const vidhya = require('./files/vidhya.jpg');  //NOT ADJUSTED

export class Schools extends Component {

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
          {/*<div className="list">
            <span className="icon un-done" />
            <span className="text">
              <p>
                Help finding you an investor
                <i>family only</i>
              </p>
            </span>
          </div>*/}
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
    }

    return (
      <div className="container">
        <div className="row lease-and-shared">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              School Benefits
            </p>
            <ul>
              <li>
                Recruit out-of-area faculty who don't want to go back to being renters.
              </li>
              <li>
                Retain faculty and staff by decreasing their commute and increasing their stability.
              </li>
              <li>
                Sustainably help faculty build more wealth without increasing salaries. 
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              Landed Advantage
            </p>
            <ul>
              <li>
                <strong>Stay at arm's length.</strong> Don't put the relationship between faculty and administration at risk. 
              </li>
              <li>
                <strong>No increase in overhead.</strong> Landed takes care of all regulatory and compliance infrastructure.
              </li>
              <li>
                <strong>Leverage Landed's network.</strong> Through standard terms, Landed makes the investment more compelling.
              </li>
            </ul>
          </div>
        </div>

       {/*} <div className="row terms">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <p className="title">
              Customizable terms
            </p>
            <p className="text">
              Our basic terms have been developed based on years of experience and reflect standard practice.  Sign up to customize them.
            </p>
            <div className="hidden-xs hidden-sm">
              { renderLandedSupport() }
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 terms-table">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Promissory Note
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Example
              </p>
            </div>
            { renderTable(RENTAL) }
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
                <img src={ mikael } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  <span className="story-title">
                    Kipp: Bay Area<br />
                  </span>
                  Expanding Donor Opportunities
                  <br />
                  <span className="read">
                    Read the Kipp Story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: false, showSecondStory: !showSecondStory ? true : false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ vidhya } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showSecondStory && 'active'}`}>
                  <span className="story-title">
                    Los Altos District <br />
                  </span>
                  Structured Community Help
                  <br />
                  <span className="read">
                    Read the LASD story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className={`story ${showFirstStory && 'show'}`}>
              <FifthStory />
            </div>
            <div className={`story ${showSecondStory && 'show'}`}>
              <SixthStory />
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}
