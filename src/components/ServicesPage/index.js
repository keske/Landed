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
      title: 'We help you get home financing from family and trusted partners -- the right way.',
      text: "Landed helps you create and register legal documents, helps track and transfer payments, and acts as an independent arbiter.<br /><br />You decide on a structure (either a loan, a lease-to-own, or a co-investment agreement) and Landed takes care of the rest.",
      image: 'services',
    };

    const imageBlockProps = {
      text: 'Let Landed take away<br />all the headaches<br />with getting financial <br />support',
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
                  Typical rent-to-own contracts have a bad reputation.  Traditionally, an upfront option fee is paid as well as a monthly rent premium that eventually goes towards an inflated home purchase price.  Sadly, the reality is that many buyers never exercise their right to buy and all those additional fees go straight to the landlord’s pocket.  We don’t think that’s fair.
                </p>

                <span
                  className={ `button ${ loanFamilyExpand && 'hide' }` }
                  onClick={ this.showLoenFamily }
                >
                  details and examples
                </span>

                <p className={`more-known ${!loanFamilyExpand && 'hide'}`}>
                  More typically known as a lease-option agreement, our contract involves two main parts:
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
                      <strong>A mortgage or deed of trust that secures the loan.</strong> It is registered with the relevant local authorities and helps ensure that the lender is protected in a number of contingencies.
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
                <span className="loan-icon" />
                <p className="title">
                  Lease -<br />To-Own
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Typical rent-to-own contracts have a bad reputation. Traditionally, an upfront option fee is paid as well as a monthly rent premium that eventually goes towards an inflated home purchase price. Sadly, the reality is that many buyers never exercise their right to buy and all those additional fees go straight to the landlord’s pocket. We don’t think that’s fair.
                </p>

                <span
                  className={ `button ${ leaseExpand && 'hide' }` }
                  onClick={ this.showLease }
                >
                  details and examples
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
              </div>
            </div>
          </div>
          { leaseExpand && <Lease /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="loan-icon" />
                <p className="title">
                  Shared<br />Ownership
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Shared ownership splits a home purchase, but assigns exclusive living rights to one of the parties (the Resident Owner). For the portion that the Resident Owner doesn’t own, he or she pays rent to the investor.
                </p>

                <span
                  className={ `button ${ ownershipExpand && 'hide' }` }
                  onClick={ this.showOwnersip }
                >
                  details and examples
                </span>

                <p className={`more-known ${!ownershipExpand && 'hide'}`}>
                  More typically known as a lease-option agreement, our contract involves two main parts:
                </p>
                <div className={`expandet-list list ${ !ownershipExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A shared ownership agreement that splits the responsibilities of ownership.</strong>  The two parties hold the property on title as Tenants-In-Common. The ownership percentages between the two parties are usually calculated by how much they put in as down-payment.  Typically, all financials (paying the mortgage, insurance, repairs, but also receiving rent payments) are split according to ownership interest.  The Resident Owner is allowed to slowly purchase more of the property over time.
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
        </div>
        <ImageBlock { ...imageBlockProps } />
      </section>
    );
  }
}
