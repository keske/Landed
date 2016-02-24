import React, { Component } from 'react';
import { Link } from 'react-router';
import R from 'ramda';

/* components */
import SmartLoading from '../SmartLoading';

/* component styles */
import { styles } from './styles/styles.scss';

/* images */
const icons = R.range(1, 3 + 1).map(index => require(`./files/how-${index}.png`));

export class HowItWorks extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <SmartLoading animation="fade-in"
                move="from-bottom-to-top"
                distance={20}
                speed={1400}
                wait={800}
              >
                <h2 className="green">
                  How do we help?
                </h2>
              </SmartLoading>
            </div>
          </div>

          <div className="row">

            <SmartLoading animation="fade-in"
              move="from-bottom-to-top"
              distance={20}
              speed={700}
              wait={1000}
            >
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                <img src={ icons[0] } />
                <p className="paragraph green">
                  1. Transaction support

                </p>
                <p className="paragraph">
                  Landed works with top lawyers to create, register and update re-usable legal documents.<br /><br />Pay your attorney for advice and review, not word processing.
                </p>
              </div>
            </SmartLoading>

            <SmartLoading animation="fade-in"
              move="from-bottom-to-top"
              distance={40}
              speed={700}
              wait={1200}
            >
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                <img src={ icons[1] } />
                <p className="paragraph green">
                  2. Effortless payments

                </p>
                <p className="paragraph">
                  Landed helps you assess prices, set up recurring payments, and log everything to keep tax filings simple.<br /><br />So easy you can set it and forget it, minimizing potential conflict.
                </p>
              </div>
            </SmartLoading>

            <SmartLoading animation="fade-in"
              move="from-bottom-to-top"
              distance={60}
              speed={700}
              wait={1400}
            >
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                <img src={ icons[2] } />
                <p className="paragraph green">
                  3. Ongoing mediation
                </p>
                <p className="paragraph">
                  Landed stays engaged to enforce the rules you've set and partner with you as circumstances change.<br /><br />We'll make sure you can keep your investment and relationship separate.
                </p>
              </div>
            </SmartLoading>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <span className="special">
                <br />Concierge support for <span className="free">$199 + $5/month</span>
              </span>
              <span className="price">
                No fees until your documents are properly recorded.<br />Earn potential tax deductions, get investment protection and save thousands on legal fees. 
              </span>
              <Link to="products">
                <span className="button">
                  Learn More
                </span>
             </Link>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
