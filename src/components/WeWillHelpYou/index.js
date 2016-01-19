import React, { Component } from 'react';

/* component styles */
import { styles } from './styles/styles.scss';

export class WeWillHelpYou extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-10 col-sm-12 col-md-11 col-lg-11 col-xs-offset-1 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 text-center">
              <p className="title">
                Getting help from family and trusted partners<br className="hidden-xs" />to pay for home?  We'll help you:
                { /* ' */ }
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-10 col-sm-5 col-md-4 col-lg-3 col-xs-offset-2 col-sm-offset-1 col-md-offset-2 col-lg-offset-2">
              <p className="list-title">
                Enlist Supporters
              </p>
              <ul>
                <li>
                  Get educated on options and understand the different risks
                </li>
                <li>
                  Understand your expected investment performance
                </li>
                <li>
                  Get the tools you need to have productive discussions
                </li>
              </ul>
            </div>
            <div className="col-xs-10 col-sm-5 col-md-4 col-lg-3 col-xs-offset-2 col-sm-offset-1">
              <p className="list-title">
                Formalize Support
              </p>
              <ul>
                <li>
                  Learn how the buying process  is different with partners
                </li>
                <li>
                  Get support creating, signing, notarizing and recording documents
                </li>
                <li>
                  Set up automated payments so you can set it and forget it
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
