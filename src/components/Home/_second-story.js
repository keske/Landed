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
              Jennifer considered two options: (1) get a 10% down FHA loan or (2) take $100,000 from her school's Landed fund for a 40% partnership. By putting a total of 25% down, Jennifer could safely access interest-only loan options.
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
                  $100,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Current Savings
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $65,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Credit Score
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  720
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Home Price
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $650,000
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
                Debt-Free Financing
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Monthly Loan Payments
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $3,500
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,300
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Interest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,430
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,300
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Principal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $720
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Mortgage Insurance
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $390
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Other Home Costs
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $1,000
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,000
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Total Out-of-Pocket
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $4,540
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,300
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Expected Tax Deduction
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(561)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(300)
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Paying Off Mortgage
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(720)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Net Cost of Home
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $3,259
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,000
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="lended-helped">
              <p className="title">
                How Landed Helps
              </p>
              <p>
                Landed created the down payment support fund at Jennifer's school and helped the school reach out to its parents, alumni and champions to raise the capital.
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
              As soon as she buys her house, the LA property market crashes. At the end of 7 years, her home is worth the same it was when she bought it.
            </p>
            <p>
              During those 7 years, Jennifer and her family have managed to save another $65,000. She chooses to re-finance with Landed support, but needs much less help this time.
            </p>
            <p>
              When Jen refinances, all the original investors in the school's fund get their investment back and many choose to re-invest.
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
