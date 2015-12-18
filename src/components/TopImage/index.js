import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

const file = require('./files/top.jpg');

export class TopImage extends Component {
  static propTypes = {
    showPopup: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.onScrollAnimation = this.onScrollAnimation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollAnimation);

    // setTimeout(() => this.setState({
    //   loaded: true,
    // }), 2000);

    const img = new Image();

    img.src = file;
    if (!img.complete) {
      img.onload = () => {
        this.setState({
          loaded: true,
        });
      };
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollAnimation);
  }

  onScrollAnimation() {
    this.blurImage();
  }

  blurImage() {
    // const opacity = (window.pageYOffset / 190).toFixed(1);

    // if (screen.width >= 720) {
    //   this.refs.blurred.style.opacity = opacity;
    // }
  }

  render() {
    const { loaded } = this.state;

    return (
      <section className={ `${styles}` }>
        <div className={`blurred-image ${loaded && 'loaded'}`} ref="blurred" />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
              <ReactCSSTransitionGroup transitionName="title-animation"
                                       transitionAppear
                                       transitionAppearTimeout={ 1300 }>
                <h1 className="hidden-xs hidden-sm">
                  Join forces to pay for home
                </h1>
                <h1 className="hidden-md hidden-lg">
                  Join forces to pay for&nbsp;home
                </h1>
              </ReactCSSTransitionGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
              <ReactCSSTransitionGroup transitionName="text-animation-2"
                                       transitionAppear
                                       transitionAppearTimeout={ 700 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Simple, standard shared ownership structures to split your investment with family or trusted partners.

                  </p>
                </div>
              </ReactCSSTransitionGroup>

              <ReactCSSTransitionGroup transitionName="text-animation-1"
                                       transitionAppear
                                       transitionAppearTimeout={ 1000 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Trusted on-going support to make sure you don't jeopardize your most important relationships.
                  </p>
                </div>
              </ReactCSSTransitionGroup>

             <ReactCSSTransitionGroup transitionName="text-animation-2"
                                       transitionAppear
                                       transitionAppearTimeout={ 1300 }>
                <div className="group">
                  <span className="icon" />
                  <p>
                    Your favorite home partner from search to sale.
                  </p>
                </div>
              </ReactCSSTransitionGroup> 

              <ReactCSSTransitionGroup transitionName="text-animation-4"
                                       transitionAppear
                                       transitionAppearTimeout={ 1700 }>
                <div className="hidden-md hidden-lg">
                  <Link to="join">
                    <span className="button">
                      I’m ready for home
                    </span>
                  </Link>
                </div>
                <div className="hidden-xs hidden-sm">
                  <span className="button" onClick={ () => this.props.showPopup(true) }>
                    I’m ready for home
                  </span>
                </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
