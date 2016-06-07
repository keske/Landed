import React, { Component } from 'react';

export class FirstStory extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              <strong>Diego</strong> is a junior lawyer in Portland. He lives alone with his young son Robert who is in pre-school.
            </p>
            <p>
              Diego is tired of being evicted for 'landlord-use' or being forced to pay massive rent increases.
            </p>
            <p>
              Diego has enough for a regular down payment, but wants to buy a fixer-upper and really invest in his home.
            </p>
            <p>
              Diego doesn't have enough money for both, so he chooses to take $38,000 from a UCLA Landed Fund.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="financial-info">
              <p className="title">
                Diego's Financial Information
              </p>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Family Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $85,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  After-Tax Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $70,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Current Savings
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $76,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Credit Score
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  700
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Home Price
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $380,000
                </div>
              </div>

            </div>
          </div>
        </div>
        <br /><br /><br />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 diff-table">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-xs hidden-sm">
                &nbsp;
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-title">
                FHA Mortgage
              </div>
              <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4 lease-title">
                Landed Support
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop1">
                <strong>Total Monthly Payments</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val1">
                <strong>$2,420</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val1">
                <strong>$1,920</strong>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>P</strong>rincipal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $505
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $570
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>I</strong>nterest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $1,290
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $725
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>T</strong>axes
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $485
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $485
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>I</strong>nsurance and HOA
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $140
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $140
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop1">
                <strong>Cost of Home <br/>(Tax Benefit Included)</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val1">
                <strong>$2,105</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val1">
                <strong>$1,705</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                Cash Remaining for Expenses
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $3,730
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $4,130
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                Debt-to-Income Ratio
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                34.1%
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                27.1%
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="lended-helped">
              <p className="title">
                How Landed Helps
              </p>
              <p>
                Landed helped alumni at UCLA come together to form a Landed Fund to support homebuyers like Diego.
              </p>
              <p>
                Landed worked with Diego to put all his financing together and close his home.
              </p>
              <p>
                Landed helps Diego with the mechanics of buying back the support over time and estimating the value of the improvements.
              </p>
            </div>
          </div>
        </div>
        <div className="row sign">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <p>
              After two years and $30,000 of work, the value of the property has increased from $380,000 to $500,000.
            </p>
            <p>
              The assessors estimate that the home would have been worth $460,000 without the improvements, so the property has really only appreciated $80,000.
            </p>
            <p>
              Diego therefore pays the fund $38,000 back plus $20,000 (25% of $80,000), which he can easily do out of his gains. Both Diego and his community end up better off.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
