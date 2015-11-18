import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Subscribe extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <form action="//golanded.us10.list-manage.com/subscribe/post?u=98d8f491f2437127565bb85c3&amp;id=f70e89b55c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 text-right">
                <span className="email-icon hidden-xs hidden-sm" />
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3">
                <span className="title">
                  Just curious? Leave us your email
                </span>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <input type="email"
                       name="EMAIL"
                       id="mce-EMAIL"
                       placeholder="e-mail" />
                <div id="mce-responses" className="clear">
                  <div className="response"
                       id="mce-error-response"
                       style={{ display: 'none' }} />
                  <div className="response"
                       id="mce-success-response"
                       style={{ display: 'none' }} />
                </div>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-3 col-lg-3">
                <div style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text"
                         name="b_98d8f491f2437127565bb85c3_f70e89b55c"
                         tabIndex="-1"
                         value="" />
                </div>
                <input type="submit"
                       name="subscribe"
                       id="mc-embedded-subscribe"
                       className="button hidden-xs hidden-sm"
                       value="keep me updated" />
                <input type="submit"
                       name="subscribe"
                       id="mc-embedded-subscribe"
                       className="button hidden-md hidden-lg"
                       value="ok" />
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
