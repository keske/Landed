import React, { Component } from 'react';

const RENTAL = [{
  prop: 'Purchase Frequency',
  val: 'Once a year, can purchase more of the home.',
}, {
  prop: 'Purchase Price for 1% portion',
  val: 'Purchase price based on independent index.',
}, {
  prop: 'Minimum Purchase Price for 1% portion',
  val: '90% of original purchase price basis',
}, {
  prop: 'Ownership Interest',
  val: 'Based on down-payment amounts',
}];

const PURCHASE = [{
  prop: 'Base Rent',
  val: 'Market rent',
}, {
  prop: 'Rent Discount/Premium',
  val: 'None',
}, {
  prop: 'Rent Increases',
  val: 'Assessed annually based on local index.',
}, {
  prop: 'Rent Increase Limit',
  val: 'No more than 20% every 3 years',
}, {
  prop: 'Rent Period',
  val: '5 years.  Resident can move out early but responsible for sublet.',
}, {
  prop: 'Repair Handling',
  val: 'Resident pays for minor repairs.  Major repairs paid by group.',
}];

const jenifer = require('./files/jen.png');
const marc = require('./files/marc.png');

export class Ownership extends Component {

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
                <i>coming soon</i>
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
            <p className="small-title">
              service 2
            </p>
            <p className="title">
              Shared Ownership
            </p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <p className="text">
              Shared ownership involves splitting a home purchase, but assigning exclusive living rights to one of the parties (the Resident Owner).  For the portion that the Resident Owner doesn’t own, they pay rent to the investor.
            </p>

            <p className="italic-block small-title">
              A partial ownership also involves two main parts:
            </p>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">1.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  <strong>A co-ownership agreement that splits the responsibilities of ownership.</strong>  The two parties hold the property on title as Tenants-In-Common. The ownership percentages between the two parties are usually calculated by how much they put in as down-payment.  Typically, all financials (paying the mortgage, insurance, repairs, but also receiving rent payments) are split according to ownership interest.  The resident owner is allowed to slowly purchase more of the property over time.
                </p>
              </div>
            </div>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">2.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  <strong>A lease to the resident owner.</strong> This ownership group then leases the property to the Resident Owner and gives them all the rights that would typically be conveyed to a homeowner.
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
                Become a responsible homeowner without as much debt.
              </li>
              <li>
                Can buy ownership over time instead of all at once.
              </li>
              <li>
                Have your money working sooner while sharing some of the financial risk.
              </li>
            </ul>

            <p className="ul-title">
              For Investors
            </p>
            <ul>
              <li>
                Co-invest in a great home with a trusted, committed resident who takes care of your investment.
              </li>
              <li>
                Get benefits of owning investment real estate without the hassle of being a landlord.
              </li>
              <li>
                Provide an opportunity for the resident to stair-step into responsible ownership.
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
                Co-Ownership Agreement
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Recommended Default
              </p>
            </div>
            { renderTable(RENTAL) }

            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Lease
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Recommended Default
              </p>
            </div>
            { renderTable(PURCHASE) }
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
                <img src={ jenifer } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  Jennifer’s parents want to help her buy a home, but Jennifer doesn’t want a gift.
                  <br />
                  <span className="read">
                    Read Jennifer’s story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: false, showSecondStory: !showSecondStory ? true : false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ marc } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showSecondStory && 'active'}`}>
                  Marc Johnson works in finance and understands that having all of his family’s assets in one investment is not the best decision.
                  <br />
                  <span className="read">
                    Read Marc’s story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <div className={`story ${showFirstStory && 'show'}`}>
              <p>
                Instead, she would prefer to have her parents invest alongside her but in a way that doesn’t put their relationship at risk as issues come up.
              </p>
              <p>
                Jennifer finds an $900,000 condo in the Mission (San Francisco) that she absolutely loves.  She only has enough for a 5% downpayment and her parents provide an additional 15%.
              </p>
              <p>
                Every month, Jennifer and her roommates pays fair rent of $4,500.  Landed collects the money, pays the mortgage, insurance, property taxes and repair fund.  The remaining profit is split between her and her parents based on their 25/75 ownership split.
              </p>
              <p>
                Every year, Jennifer buys more of the home from her parents using Landed to determine a fair price.  Eventually in year 4, she buys the property outright.
              </p>

            </div>
            <div className={`story ${showSecondStory && 'show'}`}>
              <p>
                He wants to share the financial risk with someone but has little desire to buy more of the house over time.
              </p>
              <p>
                Marc’s friend’s brother loves investing in real estate.  They decide to split the home 25/75 but make big down-payments.  Every month, Marc pays $3,900 in rent.  Like before, Landed pays for all expenses.  The remaining $1,600 in profit is split between them.
              </p>
              <p>
                In year 3, an earthquake causes $100,000 of damage to the property.  Marc’s investor is responsible for $75,000 of the repairs.  Alternatively, Landed starts fairly discounting his ownership.
              </p>
              <p>
                After six years, the Johnson family decides it’s time for a move.  They sell the house and split the proceeds according to ownership share.
              </p>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
