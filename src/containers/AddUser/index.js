import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { AddUser } from 'components/AddUser';

/* component styles */
import { styles } from './styles/styles.scss';

const metaData = {
  title: 'Add user',
  description: 'Smarter ownership, for everyone.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'landed, smarter, ownership',
    },
  },
};

export class AddUserContainer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className={ `${styles}` }>
        <DocumentMeta { ...metaData } />
        <AddUser />
      </section>
    );
  }
}
