import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import { ImageBlock } from '../ImageBlock';
// import { HowItWorks } from '../HowItWorks';
import { Lease } from './_lease';
import { Ownership } from './_ownership';
import { Loan } from './_loan';

/* component styles */
import { styles } from './styles/styles.scss';

export class HomePage extends Component {

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

    const imageBlockProps = {
      text: 'You need partners </br>to start a business, </br>why not to buy a </br>house?',
      imageClass: 'services',
    };

    return (
      <section>
        <ImageBlock { ...imageBlockProps } />
        <div className={ `${styles}` }>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2 className="green">
                    How does the support work?
                </h2>
              </div>
            </div>
          </div>
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
                  It's hard to qualify for a mortgage with less than a 20% down payment, and in many cases, it doesn't make sense to take on more debt.  Debt-free financing allows homebuyers to accept funds today in exchange for a partnership share of the appreciation or depreciation, if any, in the home.
                </p>
                <span
                  className={ `button ${ leaseExpand && 'hide' }` }
                  onClick={ this.showLease }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!leaseExpand && 'hide'}`}>
                  Often known as equity financing, it involves two main parts:
                </p>
                <div className={`expandet-list list ${ !leaseExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                    <strong>An agreement (know as the Landed Option) that gives your community the ability to make money if the value of the home goes up.</strong> For example, you might accept half of the down payment for 25% of the growth in the value of the home when you sell or refinance. This option is recorded with your local county.
                  </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !leaseExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A set of agreements to protect you and your community investors.</strong> A lien is recorded against the property to protect everyone's investment in the case you go bankrupt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { leaseExpand && <Lease /> }
        </div>        
      </section>
    );
  }
}
