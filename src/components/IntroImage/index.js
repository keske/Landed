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
    const top = (window.pageYOffset - this.refs.parallax.offsetTop) / 10;

    if (screen.width >= 720) {
      this.refs.parallax.style.backgroundPosition = `0px ${ top }px`;
    }
  }

  render() {
    const { title, text, image } = this.props;

    return (
      <section className={ `${styles} ${image}` } ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
              <ReactCSSTransitionGroup transitionName="title-animation"
                                       transitionAppear
                                       transitionAppearTimeout={ 700 }>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup transitionName="text-animation"
                                       transitionAppear
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
