import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* actions */
import * as actionCreators from 'actions/app';

/* component styles */
import styles from './styles';

@connect(state => state.app)
export class Header extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    showPhoneMenu: React.PropTypes.bool,
    showLoginMenu: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      error: false,
    };

    this.animateHeader = this.animateHeader.bind(this);

    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
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

  handleMenu() {
    const { showPhoneMenu } = this.props;

    if (showPhoneMenu) {
      this.actions.show(false);
    } else {
      this.actions.show(true);
    }
  }

  renderNav() {
    return (
      <nav>
        <Link onClick={ () => this.actions.show(false) }
              to="about"
              activeClassName="active">
          About
        </Link>
        { /* <Link to="oportuninties"
              activeClassName="active">
          Investment oportuninties
        </Link> */ }
        <a href="https://golanded.zendesk.com/hc/en-us"
              activeClassName="active">
          F.A.Q.
        </a>
      </nav>
    );
  }

  render() {
    const { show, error } = this.state;
    const { showPhoneMenu, showLoginMenu } = this.props;

    function renderLogin() {
      return (
        <span>
          <button className={ `login hidden-xs hidden-sm ${ showLoginMenu ? 'hide' : '' }` }>
            Log in
          </button>
          <a href="https://golanded.typeform.com/to/GbesjE">
            <button className={ `signup hidden-xs hidden-sm ${ showLoginMenu ? 'hide' : '' }` }>
              Sign up
            </button>
          </a>
        </span>
      );
    }

    // jQuery yeah, but... okaaay
    if (!showPhoneMenu) {
      $('html').css('overflow', 'scroll');
    } else {
      $('html').css('overflow', 'hidden');
    }

    return (
      <section className={ `${ styles }` }>
        <ReactCSSTransitionGroup transitionName="el-animation"
                                       transitionAppear={ true }
                                       transitionAppearTimeout={ 500 }>
          <div className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1 hidden-xs hidden-sm">
                  <Link to="/">
                    <span className="logo" />
                  </Link>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm">
                  { this.renderNav() }
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-right hidden-xs hidden-sm login-fixed-button"
                     onClick={ () => { this.actions.showLoginMenu(true); } }>
                  { renderLogin() }
                </div>
                <div className="col-xs-12 col-sm-12 hidden-md hidden-lg text-right"
                     onClick={ () => this.handleMenu() }>
                  <span className={ `burger ${ showPhoneMenu ? 'cross' : '' }` } />
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="logo-symbol" />
            </Link>
          </div>
          <div className={ `green-header ${ show ? 'show' : '' } hidden-md hidden-lg` } />
          <div className={ `fixed-header ${ show ? 'show' : '' } hidden-xs hidden-sm` }>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 fixed-nav">
                  { this.renderNav() }
                </div>
                <div className={ `${ show ? 'fixed' : '' } col-xs-12 col-sm-4 col-md-4 col-lg-3 text-right login-fixed-button` }
                     onClick={ () => { this.actions.showLoginMenu(true); } }>
                  { renderLogin() }
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="logo-small" />
            </Link>
          </div>
        </ReactCSSTransitionGroup>
        <div className={ `phone-menu ${ showPhoneMenu ? 'show' : '' }` }>
          { this.renderNav() }
          <div className="text-center"
               onClick={ () => { this.actions.showLoginMenu(true); } }>
            { renderLogin() }
          </div>
        </div>
        <div className={ `login-menu ${ showLoginMenu ? 'show' : '' }` }>
          <span className="cross"
                onClick={ () => { this.actions.showLoginMenu(false); } } />
          <input type="email" placeholder="e-mail" />
          <input type="password" placeholder="password" />
          <span className={ `error ${ error ? 'show' : '' }` }>
            wrong email/password
          </span>
          <submit onClick={ () => { this.setState({ error: true }); } }>
            Log in
          </submit>
        </div>
        <div className={ `black-layer ${ showPhoneMenu ? 'show' : '' }` } />
      </section>
    );
  }
}
