import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* application components */
import { TopImage } from 'components/TopImage';
import { Subscribe } from 'components/Subscribe';
import { Toggle } from 'components/Toggle';
import { YouCan } from 'components/YouCan';
import { ImageBlock } from 'components/ImageBlock';
import { HowItWorks } from 'components/HowItWorks';
import { FAQ } from 'components/FAQ';

const metaData = {
  title: 'Home',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <TopImage />

        <ReactCSSTransitionGroup transitionName="page-parts-animation"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 3000 }>
          <Subscribe />
          <Toggle />
          <YouCan />
          <ImageBlock />
          <HowItWorks />
          <FAQ />
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}
