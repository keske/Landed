import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { AboutPage } from 'components/AboutPage';

const metaData = {
  title: 'About',
  description: 'I\'m a description. I can to create multiple tags',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
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
