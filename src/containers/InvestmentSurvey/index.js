import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import { InvestmentPropertySurvey } from 'components/InvestmentPropertySurvey';

const metaData = {
  title: 'Co-Ownership Survey',
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
export class InvestmentSurvey extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <InvestmentPropertySurvey />
      </section>
    );
  }
}