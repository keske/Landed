import React, { Component } from 'react';

export class ThirdStory extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              <strong>Lisa</strong> is one year into her new job as a software engineer and is committed to the Bay Area long-term.
            </p>
            <p>
              Lisa is eyeing a 2 bedroom condo in San Jose in a neighborhood that she really likes.
            </p>
            <p>
              She doesn't want to buy the whole thing as she thinks it's overly risky to take out a 95% loan from the bank.
            </p>
            <p>
              She wants to split the purchase with her parents. { /* ' */ }
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="financial-info">
              <p className="title">
                Lisa's Financial Information { /* ' */ }
              </p>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Individual Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $100,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  After-Tax Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $80,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Current Savings
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $35,000
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Credit Score
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  735
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Home Price
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $640,000
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
                Shared Ownership
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Monthly Loan Payments
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $3,250
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $613
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Interest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,500
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $425
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Principal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $750
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $188
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Mortgage Insurance
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $450
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
                $1,100
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $294
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Rent on Parent's Portion { /* ' */ }
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                none
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,325
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Total Out-of-Pocket
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $4,800
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $3,232
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Expected Tax Deduction
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(500)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(85)
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Paying Off Mortgage
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(750)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(188)
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Net Cost of Home
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $3,550
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,959
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="lended-helped">
              <p className="title">
                How Landed Helps
              </p>
              <p>
                Landed helps structure the contract between Lisa and her parents in case anything goes wrong.
              </p>
              <p>
                Landed makes sure all the bills were paid on time, and deposits the rent directly into Lisa's parents' account.
              </p>
              <p>
                Landed makes sure everyone gets all the tax deductions to which they are entitled.
              </p>
              <p>
                Landed fairly assesses the fair rent every year based on the original home price and growth in the neighborhood.
              </p>
              <p>
                Landed fairly assesses the buy-back price based on the original home price and growth in the neighborhood.
              </p>
              <p>
                Landed makes sure no one has anything to fight about!
              </p>
            </div>
          </div>
        </div>
        <div className="row sign">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <p>
              Lisa manages getting rent from her roommates and pays her parents every month through Landed.
            </p>
            <p>
              Every year, Lisa buys as much of the property as she wants from her parents at a fair price.
            </p>
            <p>
              Her parents earn more on their investment than they would in their mutual fund.
            </p>
            <p>
              Everyone wins, except her previous landlord!
            </p>
          </div>
        </div>
      </section>
    );
  }
}
