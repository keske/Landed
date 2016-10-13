import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

// Components
import Quiz from 'components/Modules/Quiz';

// Styles
import s from './index.css';

const close = require('./files/close.png');

@observer
export default class QuizPopUp extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  render() {
    const { app } = this.context;

    return (
      <section
        className={cx(
          s.root,
          { [s.show]: app.showQuizPopUp },
        )}
      >
        <div
          className={s.outer}
          onClick={() => { app.hideQuiz(); }}
        />
        <div className={s.inner}>
          <Quiz />
        </div>
        <div
          className={s.close}
          onClick={() => { app.hideQuiz(); }}
        >
          <img src={close} role="presentation" />
        </div>
      </section>
    );
  }
}
