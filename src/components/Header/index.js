import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.animateHeader = this.animateHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateHeader);
  }

  animateHeader() {
    window.pageYOffset > 600 ? this.setState({ show: true }) : this.setState({ show: false });
  }

  render() {
    const { show } = this.state;

    function renderNav() {
      return (
        <nav>
          <Link to="about">
            About
          </Link>
          <Link to="oportuninties">
            Investment oportuninties
          </Link>
          <Link to="faq">
            F.A.Q.
          </Link>
        </nav>
      );
    }

    function renderLogin() {
      return (
        <button className="login">
          Log in
        </button>
      );
    }

    return (
      <section className={ `${ styles }` }>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1">
                <span className="logo" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm">
                { renderNav() }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-right hidden-xs hidden-sm">
                { renderLogin() }
              </div>
              <div className="col-xs-6 col-sm-6 hidden-md hidden-lg text-right">
                sad
              </div>
            </div>
          </div>
          <div className="logo-symbol" />
        </div>
        <div className={ `fixed-header ${ show ? 'show' : '' } hidden-xs hidden-sm` }>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
                { renderNav() }
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 text-right">
                { renderLogin() }
              </div>
            </div>
          </div>
          <div className="logo-small" />
        </div>
      </section>
    );
  }
}
