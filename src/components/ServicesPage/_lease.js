import React, { Component } from 'react';

const RENTAL = [{
  prop: 'Base Rent',
  val: 'Market rent',
}, {
  prop: 'Rent Discount/Premium',
  val: 'None',
}, {
  prop: 'Rent Increases',
  val: 'Assessed annually based on local index. ',
}, {
  prop: 'Rent Increase Limit',
  val: 'No more than 20% every 3 years.',
}, {
  prop: 'Rent Period',
  val: '5 years.  Resident can move out early but responsible for sublet.',
}, {
  prop: 'Repair Handling',
  val: 'Resident pays for minor repairs.  Major repairs paid by investor.',
}];

const PURCHASE = [{
  prop: 'Purchase Timeline',
  val: 'Can purchase after 2 years with 90 days notice.',
}, {
  prop: 'Purchase Price',
  val: 'Purchase price based on independent index.',
}, {
  prop: 'Minimum Purchase Price',
  val: '90% of original purchase price.',
}];

export class Lease extends Component {
  render() {

    function renderTable(data) {
      return data.map((field, key) =>
        <div key={ key }>
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
            <span className="icon" />
            <span className="text">
              <p>
                Help finding you an investor
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
              service 1
            </p>
            <p className="title">
              Lease Until You Buy
            </p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <p className="text">
              Typical rent-to-own contracts have a bad reputation.  Traditionally, an upfront option fee is paid as well as a monthly rent premium that eventually goes towards an inflated home purchase price.  Sadly, the reality is that many buyers never exercise their right to buy and all those additional fees go straight to the landlord’s pocket.  We don’t think that’s fair.
            </p>

            <p className="italic-block small-title">
              More typically known as a lease-option agreement, our contract involves two main parts:
            </p>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">1.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  A long-term rent agreement that provides security to both the owner and the renter.  This commits both the investor and the resident to the space for 5 years.  For this commitment, the investor agrees to give the resident the same experience they would have in their own home.
                </p>
              </div>
            </div>

            <div className="list">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                <span className="list-number">2.</span>
              </div>
              <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                <p>
                  An option to buy back the property from the investor.  In exchange to committing the home long-term, the resident is given an option to buy the property any time after two years.
                </p>
              </div>
            </div>

          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-offset-1 col-lg-offset-1">
            <p className="ul-title">
              For Residents
            </p>
            <ul>
              <li>
                Can find your own space
              </li>
              <li>
                Much more control than traditional rental
              </li>
              <li>
                No fear of landlord eviction.
              </li>
              <li>
                Can invest in your space knowing you can always choose to own it.
              </li>
              <li>
                No rent premiums or option fees.   Can save for purchase independently.
              </li>
              <li>
                Simpler than partial ownership.
              </li>
            </ul>

            <p className="ul-title">
              For Investors
            </p>
            <ul>
              <li>
                Can find your own space
              </li>
              <li>
                Much more control than traditional rental
              </li>
              <li>
                No fear of landlord eviction.
              </li>
              <li>
                Can invest in your space knowing you can always choose to own it.
              </li>
              <li>
                No rent premiums or option fees.   Can save for purchase independently.
              </li>
              <li>
                Simpler than partial ownership.
              </li>
            </ul>
          </div>
        </div>

        <div className="row terms">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <p className="title">
              Customizable terms
            </p>
            <p>
              Paragraph about customizable terms?
            </p>
            <div className="hidden-xs hidden-sm">
              { renderLandedSupport() }
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 terms-table">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Rental Agreement
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
                Purchase Option
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
      </div>
    );
  }
}
