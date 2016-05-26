import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import { ProductsPage } from 'components/ProductsPage';

const metaData = {
  title: 'Start a Landed Fund',
  description: 'Smarter ownership, for everyone.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'landed, smarter, ownership',
    },
  },
};

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Products extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <ProductsPage { ...this.props } />
      </section>
    );
  }
}
