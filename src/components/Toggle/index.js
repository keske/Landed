import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* actions */
import * as actionCreators from 'actions/toggle';

/* component styles */
import styles from './styles';

@connect(state => state.toggle)
export class Toggle extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    status: React.PropTypes.string,
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false,
    };

    this.actions = bindActionCreators(actionCreators, this.props.dispatch);

    // binds
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
  }

  componentDidMount() {
    this.refs.circle.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mousemove', this.handleMouseMove);
    this.refs.circle.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    this.refs.circle.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mousemove', this.handleMouseMove);
    this.refs.circle.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown() {
    const circleWidth = this.refs.circle.offsetWidth / 2;
    const halfOfBar = window.innerWidth / 2 - this.refs.bar.offsetWidth;

    if (window.innerWidth > 1200) {
      this.refs.circle.style.marginLeft = '-35px';
      this.refs.circle.style.left = event.pageX - halfOfBar - circleWidth;
    } else if (window.innerWidth > 720 && window.innerWidth < 1200) {
      this.refs.circle.style.marginLeft = '-115px';
      this.refs.circle.style.left = event.pageX - halfOfBar - circleWidth;
    } else if (window.innerWidth < 720) {
      this.refs.circle.style.marginLeft = '-15px';
      this.refs.circle.style.left = event.pageX - circleWidth;
    }

    this.setState({
      mouseDown: true,
    });
  }

  handleMouseMove() {
    const { mouseDown } = this.state;

    const circleWidth = this.refs.circle.offsetWidth / 2;
    const halfOfBar = window.innerWidth / 2 - this.refs.bar.offsetWidth;

    if (event.pageX > (window.innerWidth / 2) - (this.refs.bar.offsetWidth / 2 + 10) + circleWidth &&
        event.pageX < (window.innerWidth / 2) + (this.refs.bar.offsetWidth / 2 + 10) - circleWidth &&
        mouseDown) {
      if (window.innerWidth > 1200) {
        this.refs.circle.style.left = event.pageX - halfOfBar - circleWidth;
      } else if (window.innerWidth > 720 && window.innerWidth < 1200) {
        this.refs.circle.style.left = event.pageX - halfOfBar - circleWidth;
      } else if (window.innerWidth < 720) {
        this.refs.circle.style.left = event.pageX - circleWidth;
      }
    }
  }

  handleMouseUp() {
    const halfOfBar = this.refs.bar.offsetWidth / 2;

    this.refs.circle.style.left = '50%';

    this.setState({
      mouseDown: false,
    });

    if (event.pageX > (window.innerWidth / 2) - halfOfBar &&
        event.pageX < (window.innerWidth / 2) - halfOfBar / 2) {
      this.handlePosition('renting');
    } else if (event.pageX < (window.innerWidth / 2) + halfOfBar &&
               event.pageX < (window.innerWidth / 2) + halfOfBar / 2) {
      this.handlePosition('landed');
    } else if (event.pageX > (window.innerWidth / 2) + halfOfBar / 2 &&
               event.pageX < (window.innerWidth / 2) + halfOfBar) {
      this.handlePosition('owning');
    }
  }

  handlePosition(position) {
    this.refs.circle.style.marginLeft = '';
    this.actions.set(position);
  }

  render() {
    const { status } = this.props;
    const { mouseDown } = this.state;

    const data = {
      renting: {
        monthlypayments: 'HIGHEST',
        upfrontcosts: 'LOWEST',
        degreeofcontrol: 'LEAST',
      },
      landed: {
        monthlypayments: 'LOWER THAN RENTING',
        upfrontcosts: 'LOWER THAN OWNING',
        degreeofcontrol: 'SIMILAR TO OWNING',
      },
      owning: {
        monthlypayments: 'LOWEST',
        upfrontcosts: 'HIGHEST',
        degreeofcontrol: 'MOST',
      },
    };

    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="white">
                Why split a home investment?
              </h2>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
              <p className="centered text-center">
                Owning your home gives you the control that renting doesn't, but it comes at a serious cost. Where home prices are high, a downpayment can be prohibitive and a massive mortgage means too much financial risk. Something between renting and owning is needed
              </p>

              <div className="toggle">
                <div className="bar" ref="bar" />
                <div className={ ` ${ status } circle ${ mouseDown ? 'without-speed' : '' }` } ref="circle"/>
                <div className="labels">
                  <span className="label">
                    Renting
                  </span>
                  <span className="label">
                    <span className="logo" />
                  </span>
                  <span className="label">
                    Owning
                  </span>
                </div>
                <div className="active-zones">
                  <div onClick={ () => { this.handlePosition('renting'); } } />
                  <div onClick={ () => { this.handlePosition('landed'); } } />
                  <div onClick={ () => { this.handlePosition('owning'); } } />
                </div>
                <br />
                <div className={ ` ${ status } states` }>
                  <div className="state">
                    <span className="state-circle monthly-payments" />
                    <p className="state-title">
                      Monthly payments:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].monthlypayments }
                    </p>
                  </div>
                  <div className="state">
                    <span className="state-circle upfront-costs" />
                    <p className="state-title">
                      Upfront costs:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].upfrontcosts }
                    </p>
                  </div>
                  <div className="state">
                    <span className="state-circle degree-of-control" />
                    <p className="state-title">
                      Degree of control:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].degreeofcontrol }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <p className="toggle-title">
                Landed delivers the ownership experience without the ownership price tag
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
