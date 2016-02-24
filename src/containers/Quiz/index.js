import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { Quiz } from 'components/Quiz';

/* component styles */
import { styles } from './styles/styles.scss';

const metaData = {
  title: 'Quiz',
  description: 'Smarter ownership, for everyone.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'landed, smarter, ownership',
    },
  },
};

export class QuizContainer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className={ `${styles}` }>
        <DocumentMeta { ...metaData } />
        <div className="header-green-layer" />
        <Quiz />
      </section>
    );
  }
}
