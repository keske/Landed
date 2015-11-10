import React, { Component } from 'react';

/* components */
import { IntroImage } from '../IntroImage';
import { ThreeCols } from './_threeCols';
import { WhoIsLanded } from './_whoIsLanded';
import { WhyDoesLandedExist } from './_whyDoesLandedExist';

/* component styles */
import styles from './styles';

export class AboutPage extends Component {
  render() {
    const intro = {
      title: 'What is Landed?',
      text: 'We’re a San Francisco headquartered company on a mission: make it easier and smarter to buy and invest in urban homes.<br /><br />For homebuyers, we’re a smarter financing option that allows you to share some of the financial risk of buying a home with other investors.',
    };

    return (
      <section className={ `${styles}` }>
        <IntroImage { ...intro } />
        <div className="container">
          <ThreeCols />
          <WhoIsLanded />
          <WhyDoesLandedExist />
        </div>
      </section>
    );
  }
}
