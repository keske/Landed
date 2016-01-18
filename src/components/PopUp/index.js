import React, { Component } from 'react';

/* application components */
import { JoinUs } from 'components/JoinUs';

/* component styles */
import { styles } from './styles/styles.scss';

const close = require('./files/close.png');

export class PopUp extends Component {
  static propTypes = {
    popup: React.PropTypes.bool,
    showPopup: React.PropTypes.func,
  };

  render() {
    const { popup } = this.props;
    return (
      <section className={ `${styles} ${ popup && 'show' }` }>
        <div className="outer" onClick={ () => this.props.showPopup(false) } />
        <div className="inner">
          <JoinUs />
        </div>
        <div className="close" onClick={ () => this.props.showPopup(false) }>
          <img src={ close } />
        </div>
      </section>
    );
  }
}
