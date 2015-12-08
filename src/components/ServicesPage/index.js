import React, { Component } from 'react';

/* components */
import { IntroImage } from '../IntroImage';
import { ImageBlock } from '../ImageBlock';
import { HowItWorks } from '../HowItWorks';
import { Lease } from './_lease';

/* component styles */
import styles from './styles';

export class ServicesPage extends Component {
  render() {
    const intro = {
      title: 'How can Landed help?',
      text: 'We make sharing your home investment delightfully simple.',
      image: 'top-about.png',
    };

    return (
      <section>
        <IntroImage { ...intro } />
        <div className={ `${styles}` }>
          <Lease />
        </div>
        <ImageBlock text="Let Landed take away<br />all the headaches<br />of shared ownership" />
        <HowItWorks />
      </section>
    );
  }
}
