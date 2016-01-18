import React, { Component } from 'react';

/* application components */
import { Quiz } from 'components/Quiz';

/* component styles */
import { styles } from './styles/styles.scss';

const close = require('./files/close.png');

export class QuizPopUp extends Component {
  static propTypes = {
    showQuizPopUp: React.PropTypes.bool,
    showQuiz: React.PropTypes.func,
  };

  render() {
    const { showQuizPopUp } = this.props;

    return (
      <section className={ `${styles} ${ showQuizPopUp && 'show' }` }>
        <div className="outer" onClick={ () => this.props.showQuiz(false) } />
        <div className="inner">
          <Quiz />
        </div>
        <div className="close" onClick={ () => this.props.showQuiz(false) }>
          <img src={ close } />
        </div>
      </section>
    );
  }
}
