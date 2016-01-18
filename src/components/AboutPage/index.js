import React, { Component } from 'react';

/* components */
import { IntroImage } from '../IntroImage';
import { ThreeCols } from './_threeCols';
import { WhoIsLanded } from './_whoIsLanded';

/* component styles */
import { styles } from './styles/styles.scss';

export class AboutPage extends Component {
  render() {
    const intro = {
      title: 'What is Landed?',
      text: 'We’re a San Francisco headquartered company on a mission: make it easier and smarter to buy and invest in urban homes.<br /><br />For homebuyers, we help you share some of the financial risk of buying a home with other trusted partners.',
      image: 'about',
    };

    return (
      <section className={ `${styles}` }>
        <IntroImage { ...intro } />
        <ThreeCols />
        <WhoIsLanded />
      </section>
    );
  }
}
