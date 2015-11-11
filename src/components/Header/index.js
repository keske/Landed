import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import $ from 'jquery';

/* actions */
import * as actionCreators from 'actions/app';

/* component styles */
import styles from './styles';

@connect(state => state.app)
export class Header extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    showPhoneMenu: React.PropTypes.bool,
    loaded: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      loaded: false,
    };

    this.animateHeader = this.animateHeader.bind(this);

    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateHeader);

    this.setState({
      loaded: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateHeader);
  }

  animateHeader() {
    window.pageYOffset > 600 ? this.setState({ show: true }) : this.setState({ show: false });
  }

  handleMenu() {
    const { showPhoneMenu } = this.props;

    if (showPhoneMenu) {
      this.actions.show(false);
      $('body, html').css('overflow', 'scroll');
    } else {
      this.actions.show(true);
      $('body, html').css('overflow', 'hidden');
    }
  }

  render() {
    const { show, loaded } = this.state;
    const { showPhoneMenu } = this.props;

    function renderNav() {
      return (
        <nav className={ `${ loaded ? 'loaded' : '' }` }>
          <Link to="about"
                activeClassName="active">
            About
          </Link>
          <Link to="oportuninties"
                activeClassName="active">
            Investment oportuninties
          </Link>
          <Link to="faq"
                activeClassName="active">
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
              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1 hidden-xs hidden-sm">
                <Link to="/">
                  <span className="logo" />
                </Link>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm">
                { renderNav() }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-right hidden-xs hidden-sm">
                { renderLogin() }
              </div>
              <div className="col-xs-12 col-sm-12 hidden-md hidden-lg text-right"
                   onClick={ () => this.handleMenu() }>
                <span className={ `burger ${ showPhoneMenu ? 'cross' : '' }` } />
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
        <div className={ `phone-menu ${ showPhoneMenu ? 'show' : '' }` }>
          { renderNav() }
          <div className="text-center">
            { renderLogin() }
          </div>
        </div>
        <div className={ `black-layer ${ showPhoneMenu ? 'show' : '' }` } />
      </section>
    );
  }
}
