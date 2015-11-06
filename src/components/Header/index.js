import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      green: true,
    };
  }
  componentDidMount() {
    window.onscroll = () => {
      window.pageYOffset > 600 ? this.setState({ green: true }) : this.setState({ green: false });
    };
  }
  render() {
    const { green, hidden } = this.state;

    return (
      <section className={ `${ styles } ${ green ? 'green' : '' } ${ hidden ? 'hidden' : '' }` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1">
              logo
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
              <Link to="about">
                About
              </Link>
              <Link to="investment-oportuninties">
                Investment oportuninties
              </Link>
              <Link to="faq">
                F.A.Q.
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
