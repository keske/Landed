import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { AboutPage } from 'components/AboutPage';

const metaData = {
  title: 'About',
  description: 'Smarter ownership, for everyone.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'landed, smarter, ownership',
    },
  },
};

export class About extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <AboutPage />
      </section>
    );
  }
}
