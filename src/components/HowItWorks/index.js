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
                  1. Seed Investment Communities

                </p>
                <p className="paragraph">
                  Landed works with schools, companies and affinity networks to create and manage down payment support funds.<br /><br />Each fund helps multiple people like you with their down payments.
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
                  2. Support Your Home Purchase

                </p>
                <p className="paragraph">
                  Landed and its banking partners work with you to buy your home and manage all the details of getting down payment help.<br /><br />We make sure you're never at a disadvantage competing in hot markets.
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
                  3. Make Sure Things Go Right
                </p>
                <p className="paragraph">
                  Landed stays engaged to enforce the rules that have been set and works with you as circumstances change.<br /><br />Most of the time, we just get out of the way so you get the full experience of ownership.
                </p>
              </div>
            </SmartLoading>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <span className="special">
                {/*}<br />Concierge support for <span className="free">$199 + $5/month</span>*/}
              </span>
{/*              <span className="price">
                No fees until your documents are properly recorded.<br />Earn potential tax deductions, get investment protection and save thousands on legal fees.
              </span>*/}
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
