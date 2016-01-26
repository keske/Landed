import React, { Component } from 'react';
import { Link } from 'react-router';
import SmartLoading from '../SmartLoading';

/* component styles */
import { styles } from './styles/styles.scss';

const macs = [
  require('./files/right-mac.png'),
  require('./files/left-mac.png'),
];

export class WeWillHelpYouWithMacs extends Component {

  static propTypes = {
    showQuiz: React.PropTypes.func,
  };

  render() {
    const renderButton = () => (
      <section>
        <div className="hidden-md hidden-lg">
          <Link to="quiz">
            <span className="button">
              get started
            </span>
          </Link>
        </div>
        <div className="hidden-xs hidden-sm">
          <span className="button"
            onClick={ () => this.props.showQuiz(true) }
          >
            get started
          </span>
        </div>
      </section>
    );

    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-10 col-sm-12 col-md-11 col-lg-11 col-xs-offset-1 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 text-center">
              <p className="title">
                Getting help from family and trusted partners
                <br className="hidden-xs" />  to pay for home?  We'll help you:
              </p>
            </div>
          </div>

          <div className="row enlist">
            <div
              className="col-xs-10 col-sm-8 text-center col-xs-offset-1 col-sm-offset-2 phone-mac"
            >
              <img src={macs[0]} />
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2"
            >
              <p className="list-title">
                Enlist Supporters
              </p>
              <p className="list-intro">
                Become a home-buying expert
              </p>
              <ul>
                <li>
                  When it comes to paying for home, you have more options than you think.
                </li>
                <li>
                  Understand how to involve friends and supporters with your home purchase.
                </li>
                <li>
                  Get the tools you need to outline, manage and communicate the investment.
                </li>
              </ul>
              { renderButton() }
            </div>
            <SmartLoading animation="fade-in"
              move="from-right-to-left"
              distance={30}
              speed={1500}
              wait={1400}
            >
              <div className="right-mac">
                <img src={macs[0]} />
              </div>
            </SmartLoading>
          </div>

          <div className="row formalize">
            <div
              className="col-xs-10 col-sm-8 text-center col-xs-offset-1 col-sm-offset-3 phone-mac"
            >
              <img src={macs[1]} />
            </div>
            <SmartLoading animation="fade-in"
              move="from-left-to-right"
              distance={30}
              speed={1500}
              wait={2000}
            >
              <div className="left-mac">
                <img src={macs[1]} />
              </div>
            </SmartLoading>
            <div
              className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-5 col-lg-offset-5"
            >
              <p className="list-title">
                Formalize Support
              </p>
              <p className="list-intro">
                Easily and legally organize your home supporters
              </p>
              <ul>
                <li>
                  Get support creating, signing, notarizing and registering documents.
                </li>
                <li>
                  Set up automated payments so you can set it and forget it.
                </li>
                <li>
                  Have us enforce the rules so you can protect your relationship.
                </li>
              </ul>
              { renderButton() }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
