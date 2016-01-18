import React, { Component } from 'react';

/* component styles */
import { styles } from './styles/styles.scss';

export class ImageBlock extends Component {

  static propTypes = {
    text: React.PropTypes.string,
    imageClass: React.PropTypes.string,
  };

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
    const top = (window.pageYOffset - this.refs.parallax.offsetTop) / 30;

    if (screen.width >= 720) {
      this.refs.parallax.style.backgroundPosition = `0px ${ top }px`;
    }
  }

  render() {
    const { text, imageClass } = this.props;

    return (
      <section className={ `${styles} ${imageClass}` } ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <h1 dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
