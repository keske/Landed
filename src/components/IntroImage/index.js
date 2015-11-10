import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class IntroImage extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
  }

  render() {
    const { title, text } = this.props;
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <h1 className="hidden-xs hidden-sm">
                { title }
              </h1>
              <p className="intro" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
