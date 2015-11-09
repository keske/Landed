import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
// import { ComponentName } from 'components/ComponentName';

const metaData = {
  title: 'FAQ',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class FAQ extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        About page
      </section>
    );
  }
}
