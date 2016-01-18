import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { Quiz } from 'components/Quiz';

/* component styles */
import styles from './styles';

const metaData = {
  title: 'Quiz',
  description: 'I\'m a description. I can to create multiple tags',
  
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class QuizContainer extends Component {
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
