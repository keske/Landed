import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* component styles */
import styles from './styles';

export class IntroImage extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    image: React.PropTypes.string,
  }

  render() {
    const { title, text } = this.props;

    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <ReactCSSTransitionGroup transitionName="title-animation"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 700 }>
                <h1>
                  { title }
                </h1>
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup transitionName="text-animation"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 1400 }>
                <p className="intro" dangerouslySetInnerHTML={{ __html: text }} />
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
