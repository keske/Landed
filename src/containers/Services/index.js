import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

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

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Services extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <ServicesPage { ...this.props } />
      </section>
    );
  }
}
