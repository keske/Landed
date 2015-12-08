import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { ServicesPage } from 'components/ServicesPage';

const metaData = {
  title: 'Services',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Services extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <ServicesPage />
      </section>
    );
  }
}
