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

export class Loan extends Component {

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
                On-going support and independent adviser
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
                If you plan on paying your family back, get the tax-deductable benefits!
              </li>
              <li>
                Avoid mortgage insurance and get better rates with a bigger down-payment.
              </li>
              <li>
                Safeguard your most important relationships from unclear expectations.
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              For Investors
            </p>
            <ul>
              <li>
                Protect yourself from the tax liabilities of undocumented loans or gifts.
              </li>
              <li>
                Secure your investment in the case of divorce or death.
              </li>
              <li>
                Safeguard your most important relationships from unclear expectations.
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
                <img src={ mikael } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  <span className="story-title">
                    Mikael<br />
                  </span>
                  Getting a Structured Gift
                  <br />
                  <span className="read">
                    Read Mikael's story
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
                    Vidhya <br />
                  </span>
                  A Fair Loan From Family
                  <br />
                  <span className="read">
                    Read Vidhya's story
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
        </div>


      </div>
    );
  }
}
