import React, { Component } from 'react';

/* stories */
import { FifthStory } from './_fifth-story';
import { SixthStory } from './_sixth-story';

const RENTAL = [{
  prop: 'Interest Rate',
  val: 'Minimum allowable interest (2.58% as of Dec 2015).',
}, {
  prop: 'Annual Gift',
  val: 'None (maximum $14,000 per loan, per year).',
}, {
  prop: 'Amortization Term',
  val: '30 years',
}, {
  prop: 'Loan Term',
  val: '30 years',
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
          <div className="list">
            <span className="icon un-done" />
            <span className="text">
              <p>
                Help finding you an investor
                <i>family only</i>
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
            <p className="small-title-border">
              service 3
            </p>
            <p className="title">
              Family Down-Payment Loan
            </p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <p className="text">
              In a down-payment loan, the investor provides a second loan that is properly recorded with the relevant authorities to ensure tax and legal compliance.  Although debt is the simplest form of support, the investor is taking significant risk without a corresponding reward.  Similarly, the resident owner is put in a vulnerable position should home prices adjust.
            </p>

            <p className="italic-block small-title">
              A family down-payment loan also involves two main parts:
            </p>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">1.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  <strong>A promissory note that outlines the terms of the loan.</strong>  Among other restrictions, a minimum interest rate must be charged to have the note considered valid.
                </p>
              </div>
            </div>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">2.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  <strong>A mortgage or deed of trust that secures the loan.</strong> It is registered with the relevant local authorities and helps ensure that the lender is protected in a number of contingencies.
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
                Simple, tax-deductible down-payment loan.
              </li>
              <li>
                Avoid mortgage insurance and get better rates with a bigger down-payment.
              </li>
              <li>
                Properly registered documents give you peace of mind.
              </li>
            </ul>

            <p className="ul-title">
              For Investors
            </p>
            <ul>
              <li>
                A simple way to support family members buying a home
              </li>
              <li>
                Properly registered documents give you protection in case things go wrong.
              </li>
              <li>
                Properly registered documents protect you from potential gift taxes.
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
                Promissory Note
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Recommended Default
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
