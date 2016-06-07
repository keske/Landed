import React, { Component } from 'react';

export class SecondStory extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              <strong>Jennifer</strong> is an elementary school teacher at a private school in Los Angeles.  Her husband is a junior accountant.
            </p>
            <p>
              Having just recently paid off their student debts and getting a little help from parents, they were ready to consider buying a home to start their family.
            </p>
            <p>
              Jennifer considered two options: (1) get a 10% down FHA loan or (2) take $70,000 from her school's Landed Fund for a 25% share in the appreciation or depreciation.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="financial-info">
              <p className="title">
                Jennifer's Financial Information
              </p>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Family Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $130,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  After-Tax Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $95,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Current Savings
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $70,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Credit Score
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  730
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Home Price
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $700,000
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
                <strong>$4,450</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val1">
                <strong>$3,540</strong>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>P</strong>rincipal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $930
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $1,050
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>I</strong>nterest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $2,375
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $1,340
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>T</strong>axes
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $895
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $895
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                <strong>I</strong>nsurance and HOA
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $880
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $600
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop1">
                <strong>Cost of Home <br/>(Tax Benefit Included)</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val1">
                <strong>$3,575</strong>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val1">
                <strong>$2,935</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                Cash Remaining for Expenses
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                $4,345
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                $4,980
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop2">
                Debt-to-Income Ratio
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val2">
                41.1%
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val2">
                32.7%
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="lended-helped">
              <p className="title">
                How Landed Helps
              </p>
              <p>
                Landed created the down payment support fund at Jennifer's school and helped the school reach out to qualified investors to raise the capital.
              </p>
              <p>
                Landed worked with Jennifer to put her full financing together and close the home.
              </p>
              <p>
                Most importantly, Landed makes sure Jennifer and her school community never have anything to fight about.
              </p>
            </div>
          </div>
        </div>
        <div className="row sign">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <p>
              Seven years later, Jen decides to refinance. She finds that her home hasn't appreciated at all.
            </p>
            <p>
              Thankfully, she's been paying down her mortgage every month and has more than enough equity built up to refinance into a standard 30-yr mortgage.
            </p>
            <p>
              When Jen refinances, all the original investors in the school's fund get their investment back and many choose to re-invest in the next fund.
            </p>
            <p>
              Over those 7 years, Jen avoided over $40,000 in additional interest and mortgage insurance payments thanks to Landed.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
