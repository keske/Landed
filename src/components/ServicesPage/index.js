import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import { IntroImage } from '../IntroImage';
import { ImageBlock } from '../ImageBlock';
import { HowItWorks } from '../HowItWorks';
import { Lease } from './_lease';
import { Ownership } from './_ownership';
import { Loan } from './_loan';

/* component styles */
import styles from './styles';

export class ServicesPage extends Component {

  static propTypes = {
    showPopup: React.PropTypes.func,
  }

  render() {
    const intro = {
      title: 'Comprehensive support to take the hassle out of getting investment help',
      text: "We all need a little help buying our first home but it's not always clear how to get it. <br /><br />Landed helps you create and register legal documents, helps track and transfer payments, and acts as an independent arbiter.<br /><br />Whether structured as a lease-to-own agreement, a co-investment, or just a simple loan, Landed is here to help.",
      image: 'services',
    };

    const imageBlockProps = {
      text: 'Let Landed take away<br />all the headaches<br />of shared ownership',
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
                  <Link to="join">
                    <span className="button">
                      I’m ready for home
                    </span>
                  </Link>
                </div>
                <div className="hidden-xs hidden-sm sign-up-block">
                  <span className="button" onClick={ () => this.props.showPopup(true) }>
                    I’m ready for home
                  </span>
                </div>
              </div>
            </div>
          </div>
          <HowItWorks />
          <Lease />
          <Ownership />
          <Loan />
        </div>
        <ImageBlock { ...imageBlockProps } />
        
      </section>
    );
  }
}
