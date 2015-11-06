import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { TopImage } from 'components/TopImage';
import { Subscribe } from 'components/Subscribe';
import { Toggle } from 'components/Toggle';
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
        <DocumentMeta {...metaData} />
        <TopImage />
        <Subscribe />
        <Toggle />
        <HowItWorks />
        <FAQ />
      </section>
    );
  }
}
