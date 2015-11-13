import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* component styles */
import styles from './styles';

export class TopImage extends Component {

  constructor(props) {
    super(props);
    this.parallax = this.parallax.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallax);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  parallax() {
    const top = window.pageYOffset / 10;
    this.refs.parallax.style.backgroundPositionY = top;
  }

  render() {
    return (
      <section className={ `${styles}` } ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <ReactCSSTransitionGroup transitionName="title-animation"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 1300 }>
                <h1 className="hidden-xs hidden-sm">
                  Split your home investment,<br />
                  not the space
                </h1>
                <h1 className="hidden-md hidden-lg">
                  Split your home<br />
                  investment, not the space
                </h1>
              </ReactCSSTransitionGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <ReactCSSTransitionGroup transitionName="text-animation-2"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 700 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Get benefits of ownership with as little as 5% down, less debt and fewer headaches
                  </p>
                </div>
              </ReactCSSTransitionGroup>

              <ReactCSSTransitionGroup transitionName="text-animation-1"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 1000 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Own 25% of your home’s value but get exclusive living&nbsp;rights.
                  </p>
                </div>
              </ReactCSSTransitionGroup>

              <ReactCSSTransitionGroup transitionName="text-animation-2"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 1300 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Pay expenses on the portion you own.<br />Pay rent to co-investors on the rest.
                  </p>
                </div>
              </ReactCSSTransitionGroup>

              <ReactCSSTransitionGroup transitionName="text-animation-3"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 1500 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Get benefits of ownership with less risk, less debt, and&nbsp;fewer headaches.
                  </p>
                </div>
              </ReactCSSTransitionGroup>

              <ReactCSSTransitionGroup transitionName="text-animation-4"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 1700 }>
                <a href="https://golanded.typeform.com/to/GbesjE">
                  <span className="button">
                    I want a home to live in
                  </span>
                </a>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
