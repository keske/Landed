import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { JoinUs } from 'components/JoinUs';

/* component styles */
import { styles } from './styles/styles.scss';

const metaData = {
  title: 'Join',
  description: 'Smarter ownership, for everyone.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'landed, smarter, ownership',
    },
  },
};

export class Join extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <DocumentMeta { ...metaData } />
        <div className="header-green-layer" />
        <JoinUs />
      </section>
    );
  }
}
