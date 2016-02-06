import React, { Component } from 'react';

export class FirstStory extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              <strong>Diego</strong> is a general contractor in Portland. He lives alone with his young son Robert who is in pre-school.
            </p>
            <p>
              Diego is tired of being evicted for 'landlord-use' or being forced to pay massive rent increases.
            </p>
            <p>
              Diego has enough for a regular down payment, but wants to buy a fixer-upper and really invest in his home.
            </p>
            <p>
              Diego doesn't have enough money for both, so he asks his boss for 10% of the house price in exchange for 20% of the appreciation.
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
                  $75,000
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
                FHA Mortgage (10% down)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4 lease-title">
                Mortgage with $38K debt-free help
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Monthly Loan Payments
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $1,835
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,600
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Interest Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $1,415
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,211
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Principal Paid
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $420
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $389
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
                $555
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Total Out-of-Pocket
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,705
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $2,155
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Expected Tax Deduction
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(250)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(214)
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Paying Off Mortgage
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $(420)
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $(389)
              </div>
            </div>

            <br /><br />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 prop">
                Net Cost Of Home
              </div>
              <div className="col-xs-3 col-sm-3 col-xs-offset-1 col-sm-offset-1 col-md-3 col-lg-3 fha-val">
                $2,035
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 lease-val">
                $1,552
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="lended-helped">
              <p className="title">
                How Landed Helps
              </p>
              <p>
                Landed helps structure the contract between Diego and his boss to keep both parties protected.
              </p>
              <p>
                Landed makes sure everyone gets all the tax deductions to which they are entitled.
              </p>
              <p>
                Landed fairly assesses the buy-back price based on the original home price and growth in the neighborhood.
              </p>
              <p>
                Landed helps Diego with the mechanics of buying back his boss' investment over time.
              </p>
            </div>
          </div>
        </div>
        <div className="row sign">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <p>
              After two years and $35,000 of work, Diego has improved the value of the property to $500,000. At that point, he refinances the home and gets an additional $75,000 in his pocket.
            </p>
            <p>
              Diego improved the value of his property $120,000, but he promised his boss 20% of that gain.
            </p>
            <p>
              Diego therefore pays his boss $38,000 back plus $24,000 (20% of $120,000). Both Diego and his boss end up better off.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
