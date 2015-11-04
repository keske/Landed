import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

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
      <div>
        <DocumentMeta {...metaData} />
        <h1>Home</h1>
      </div>
    );
  }
}
