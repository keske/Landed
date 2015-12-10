import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Shared extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                Shared Ownership Structures
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <p className="title">
                Lease Until You Buy
              </p>
              <p className="intro">
                Commit to a long-term rental agreement, but with the ability to buy the entire home within a set period of time.
              </p>

              <div className="benefits">
                <p className="header">
                  Benefits:
                </p>
                <p className="text">
                  <i>Resident Owner:</i> get the home experience while saving for purchase.
                </p>
                <p className="text">
                  <i>Investor:</i> standard investment property with committed occupant.
                </p>
              </div>

              <div className="role">
                <p className="header">
                  Landed’s Role:
                </p>
                <ul>
                  <li>
                    Guide you through the contract process
                  </li>
                  <li>
                    Ensure investor stays current on home expenses.
                  </li>
                  <li>
                    Fairly assess and collect rent.
                  </li>
                  <li>
                    Tax support.
                  </li>
                  <li>
                    Deal with disputes if they arise.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-offset-2 col-lg-offset-2">
              <p className="title">
                Shared Ownership
              </p>
              <p className="intro">
                Split your home investment with a trusted friend or family member.
              </p>

              <div className="benefits">
                <p className="header">
                  Benefits:
                </p>
                <p className="text">
                  <i>Resident Owner:</i> pay expenses on the portion you own, pay rent on the rest.
                </p>
                <p className="text">
                  <i>Investor:</i> standard investment property with committed occupant.
                </p>
              </div>

              <div className="role">
                <p className="header">
                  Landed’s Role:
                </p>
                <ul>
                  <li>
                    Guide you through the contract process
                  </li>
                  <li>
                    Ensure home expenses are paid.
                  </li>
                  <li>
                    Act as arbiter for repairs and upgrades.
                  </li>
                  <li>
                    Tax support.
                  </li>
                  <li>
                    Deal with disputes if they arise.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <a href="/#join" target="_blank">
                <span className="button">
                  Find out more
                </span>
              </a>
              <div className="different-structure">
                <a href="#">
                  I’m thinking of a different structure, can you help?
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
