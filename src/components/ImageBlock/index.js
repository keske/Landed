import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class ImageBlock extends Component {

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
    const top = window.pageYOffset / 30;

    if (screen.width >= 720) {
      this.refs.parallax.style.backgroundPosition = `0px ${ top }px`;
    }
  }

  render() {
    return (
      <section className={ `${styles}` } ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <h1 className="hidden-xs hidden-sm">
                Landed makes<br />ownership possible<br />sooner than you think
              </h1>
              <h1 className="hidden-md hidden-lg">
                Landed makes<br />ownership possible<br />sooner than you think
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
