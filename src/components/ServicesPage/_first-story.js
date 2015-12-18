import React, { Component } from 'react';

export class FirstStory extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              <strong>Diego</strong> is a general contractor in Portland.  He lives alone with his young son Robert who is in elementary school.
            </p>
            <p>
              Diego feels uncomfortable putting 3.5% down for a house, but is tired of being evicted for 'landlord-use' or being forced to pay massive rent increases.
            </p>
            <p>
              Diego really wants to invest in his home and has the skills to add a lot of value to the property.
            </p>
            <p>
              Diego has the idea to rent a fixer-upper from an investor, use his savings to put work into it, and then buy it back when he's ready. { /* ' */ }
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="financial-info">
              <p className="title">
                Diego's Financial Information { /* ' */ }
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
                  $15,000
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
                Lease Until You Buy
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Monthly Loan Payments
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,000
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Interest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $1,545
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Principal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $455
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
                $315
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
                $555
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Rent Owed
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                none
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2000
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Total Out-of-Pocket
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,870
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,000
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Expected Tax Deduction
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(273)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Paying Off Mortgage
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(455)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                none
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Net Cost Of Home
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,142
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
                Landed helps structure the contract between Diego and his investor to keep both parties honest.
              </p>
              <p>
                Landed makes sure all the bills are paid on time, and helps deposit the rent directly into the investor's account. { /* ' */ }
              </p>
              <p>
                Landed makes sure everyone gets all the tax deductions to which they are entitled.
              </p>
              <p>
                Landed fairly assesses the rent every year based on the original home price and growth in the neighborhood.
              </p>
              <p>
                Landed fairly assesses the buy-out price based on the original home price and growth in the neighborhood.
              </p>
            </div>
          </div>
        </div>
        <div className="row sign">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <p>
              Within 5 years, Diego will have enough for a large down-payment.
            </p>
            <p>
              Diego pays a fair price that doesn’t include all the work he's put into his home out of his own pocket.
            </p>
            <p>
              The investor makes a similar return to his other rental investments without as much work.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
