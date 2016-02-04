import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import { IntroImage } from '../IntroImage';
import { ImageBlock } from '../ImageBlock';
// import { HowItWorks } from '../HowItWorks';
import { Lease } from './_lease';
import { Ownership } from './_ownership';
import { Loan } from './_loan';

/* component styles */
import { styles } from './styles/styles.scss';

export class ServicesPage extends Component {

  static propTypes = {
    showQuiz: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      loanFamilyExpand: false,
      leaseExpand: false,
      ownershipExpand: false,
    };

    this.showLoenFamily = this.showLoenFamily.bind(this);
    this.showLease = this.showLease.bind(this);
    this.showOwnersip = this.showOwnersip.bind(this);
  }

  showLoenFamily() {
    this.setState({ loanFamilyExpand: true });
  }

  showLease() {
    this.setState({ leaseExpand: true });
  }

  showOwnersip() {
    this.setState({ ownershipExpand: true });
  }

  render() {
    const { loanFamilyExpand, leaseExpand, ownershipExpand } = this.state;

    const intro = {
      title: 'Want to partner with others to buy a home? Landed is here to help.',
      text: "You decide on a deal that works for both of you (a down payment loan, shared ownership or a debt-free investment), and Landed helps take care of the rest.",
      image: 'services',
    };

    const imageBlockProps = {
      text: 'Landed eliminates the <br />anxieties of<br />getting financial <br />support',
      imageClass: 'services',
    };

    return (
      <section>
        <IntroImage { ...intro } />
        <div className={ `${styles}` }>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="hidden-md hidden-lg sign-up-block">
                  <Link to="quiz">
                    <span className="button">
                      Sign-Up to Learn More
                    </span>
                  </Link>
                </div>
                <div className="hidden-xs hidden-sm sign-up-block">
                  <span className="button" onClick={ () => this.props.showQuiz(true) }>
                    Sign-Up to Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="loan-icon" />
                <p className="title">
                  Family<br />Loan
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Outside of large gifts, family down payment loans are the most common form of support. If your intention is to repay even some portion of the help you receive from your parents, structuring a family down payment loan ensures your family member is protected from IRS scrutiny and complications resulting from a potential divorce.
                </p>

                <span
                  className={ `button ${ loanFamilyExpand && 'hide' }` }
                  onClick={ this.showLoenFamily }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!loanFamilyExpand && 'hide'}`}>
                  A family loan involves two main parts:
                </p>
                <div className={`expandet-list list ${!loanFamilyExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A promissory note that outlines the terms of the loan.</strong>  Among other restrictions, a minimum interest rate must be charged to have the note considered valid.
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${!loanFamilyExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A mortgage or deed of trust that secures the loan.</strong> We help you register it with the relevant local authorities to make it an official second mortgage. A registered loan is also tax-deductible for the borrower, which could help them save thousands of dollars over the length of the loan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { loanFamilyExpand && <Loan /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="ownership-icon" />
                <p className="title">
                  Shared<br />Ownership
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Shared ownership splits a home purchase, but assigns exclusive living rights to one person (the Resident Owner). For the portion that the Resident Owner doesn’t own, he or she pays rent to the investor. Properly structured, it can truly be a win-win for all involved.
                </p>

                <span
                  className={ `button ${ ownershipExpand && 'hide' }` }
                  onClick={ this.showOwnersip }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!ownershipExpand && 'hide'}`}>
                  A shared ownership agreement involves a number of main parts:
                </p>
                <div className={`expandet-list list ${ !ownershipExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A shared ownership agreement that splits the responsibilities of ownership.</strong>  The two parties hold the property on title as Tenants-In-Common. The ownership percentages between the two parties are usually calculated by how much they put in as down-payment.  Typically, all financials (paying the mortgage, insurance, repairs) are split according to ownership interest.  The Resident Owner is even allowed to slowly purchase more of the property over time.
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !ownershipExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A lease to the Resident Owner.</strong> The two parties lease the property to the Resident Owner who receives all the typical living rights enjoyed by a homeowner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { ownershipExpand && <Ownership /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="lease-icon" />
                <p className="title">
                  Debt-Free<br />Financing
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  It's hard to qualify for a mortgage with less than a 20% down payment, and in many cases, it doesn't make sense to take on more debt, even if it's from someone you care about.  Debt-free financing allows homebuyers to accept funds today in exchange for part of the home's value when you refinance or sell.
                </p>
                <span
                  className={ `button ${ leaseExpand && 'hide' }` }
                  onClick={ this.showLease }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!leaseExpand && 'hide'}`}>
                  Often known as fractional equity financing, it involves a number of documents:
                </p>
                <div className={`expandet-list list ${ !leaseExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                    <strong>An option that you grant to your investor in exchange for down payment help.</strong> For example, you might accept a 10% investment for 25% appreciation when you sell or refinance. This option is recorded with the relevant authorities.
                  </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !leaseExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A number of protective documents.</strong> A deed is recorded against the property to protect your partner's investment in the case you go bankrupt. A separate agreement outlines under which conditions your investor can call the amount due.
                    </p>
                  </div>
                </div>
              </div>
              {/*<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Typical rent-to-own contracts have a bad reputation. Typically, a large upfront fee and excessively high rent is paid to really pressure the resident into buying. Sadly, the reality is that many buyers never exercise their right to buy and all those additional fees go straight to the landlord’s pocket. We don’t think that’s fair.
                </p>

                <span
                  className={ `button ${ leaseExpand && 'hide' }` }
                  onClick={ this.showLease }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!leaseExpand && 'hide'}`}>
                  More typically known as a lease-option agreement, our contract involves two main parts:
                </p>
                <div className={`expandet-list list ${ !leaseExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                    <strong>A long-term rent agreement that provides security to both the owner and the renter.</strong>  This commits both the investor and the resident to the space for 5 years.  For this commitment, the investor agrees to give the resident the same experience they would have in their own home.
                  </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !leaseExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>An option to buy back the property from the investor.</strong>  In exchange for committing to the home long-term, the resident is given an option to buy the property.
                    </p>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
          { leaseExpand && <Lease /> }
        </div>
        <ImageBlock { ...imageBlockProps } />
      </section>
    );
  }
}
