import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import { IntroImage } from '../IntroImage';
import { ImageBlock } from '../ImageBlock';
import { HowItWorks } from '../HowItWorks';
import { Lease } from './_lease';
import { Ownership } from './_ownership';

/* component styles */
import styles from './styles';

export class ServicesPage extends Component {

  static propTypes = {
    showPopup: React.PropTypes.func,
  }

  render() {
    const intro = {
      title: 'We offer comprehensive support to help take the hassle out of getting investment help.',
      text: "All of us need a little bit of help buying our first home. Not everyone is lucky enough to get big gifts to make it work.<br /><br />Although formalizing the support is hard, expensive and intimidating, it doesn't have to be.<br /><br />Whether structured as a co-investment, a rent-to-own agreement or just a simple loan, Landed is here to help.",
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
          <Lease />
          <Ownership />
        </div>
        <ImageBlock { ...imageBlockProps } />
        <HowItWorks />
      </section>
    );
  }
}
