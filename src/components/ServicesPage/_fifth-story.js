import React, { Component } from 'react';

export class FifthStory extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              <strong>Mikael</strong> is a local nurse and needs a little bit of help getting his family into their first home.
            </p>
            <p>
              Mikael's parents have been very successful and want to support his new home with a $75,000 gift.
            </p>
            <p>
              Mikael's parents would prefer to avoid gift taxes and Mikael would prefer to have the loan properly structured in case things go wrong.
            </p>
            <p>
              They decide to have the $75,000 registered as a loan but forgive a fixed amount each year to avoid gift taxes. { /* ' */ }
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="financial-info">
              <p className="title">
                Mikael's Financial Information { /* ' */ }
              </p>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-6 prop">
                  Family Income
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 value">
                  $120,000
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
                  $30,000
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
                  $510,000
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
                Parent Plus Regular Mortgage
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Monthly Loan Payments
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,600
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,000
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Interest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,010
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,400
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Principal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $590
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $600
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Mortgage Insurance
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $320
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
                $723
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $723
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Interest Paid to Parents
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                none
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $175
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Total Out-of-Pocket
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $3,643
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,898
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Expected Tax Deduction
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(419)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(328)
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Paying Off Mortgage
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(590)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(600)
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Annual Gift from Parents
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                none
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(1,167)
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Net Cost of Home
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,634
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $803
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="lended-helped">
              <p className="title">
                How Landed Helps
              </p>
              <p>
                Landed helps structure the contract between Mikael and his parents to protect both parties.
              </p>
              <p>
                Landed helps register the documents so they are legally binding.
              </p>
              <p>
                Landed helps remind Mikael about his monthly interest obligations and makes it easy for him to pay.
              </p>
              <p>
                Landed makes sure everyone got all the tax deductions to which they are entitled.
              </p>
            </div>
          </div>
        </div>
        <div className="row sign">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <p>
              After five years of living in the home, Mikael's parents will have forgiven the entire loan without being subject to gift tax exclusions.
            </p>
            <p>
              Mikael is in a strong financial position to accelerate his family's wealth building.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
