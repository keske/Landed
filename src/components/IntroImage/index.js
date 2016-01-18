import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* component styles */
import { styles } from './styles/styles.scss';

export class IntroImage extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    image: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.parallax = this.parallax.bind(this);
  }

  componentDidMount() {
    // const { image } = this.props;

    window.addEventListener('scroll', this.parallax);

    // const img = new Image();
    // img.src = require(`./files/${image}.jpg`);

    // if (!img.complete) {
    //   img.onload = () => {
    //     setTimeout(() => this.setState({
    //       loaded: true,
    //     }), 300);
    //   };
    // }

    setTimeout(() => this.setState({
      loaded: true,
    }), 300);
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
    const { loaded } = this.state;

    return (
      <section className={ `${styles} ${image}` } ref="parallax">
        <div className={`blurred-image ${loaded && 'loaded'}`} ref="blurred" />
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
