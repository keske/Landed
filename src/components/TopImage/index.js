import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import SmartLoading from '../SmartLoading';

/* component styles */
import { styles } from './styles/styles.scss';

export class TopImage extends Component {
  static propTypes = {
    showQuiz: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollAnimation);

    setTimeout(() => this.setState({
      loaded: true,
    }), 300);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollAnimation);
  }

  render() {
    const { loaded } = this.state;

    return (
      <section className={ `${styles}` }>
        <div className={`blurred-image ${loaded && 'loaded'}`} ref="blurred" />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
              <SmartLoading animation="fade-in"
                move="from-bottom-to-top"
                distance={100}
                speed={1000}
                wait={1000}
              >
                <h1 className="hidden-xs hidden-sm">
                  Join forces to pay for home
                </h1>
                <h1 className="hidden-md hidden-lg">
                  Join forces to pay for&nbsp;home
                </h1>
              </SmartLoading>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">

              <SmartLoading animation="fade-in"
                move="from-bottom-to-top"
                distance={100}
                speed={1300}
                wait={1200}
              >
                <div className="group">
                  <span className="icon" />
                  <p>
                    Simple, standard shared ownership structures to split your investment with family or trusted partners.
                  </p>
                </div>

                <div className="group">
                  <span className="icon" />
                  <p>
                    Trusted on-going support to make sure you don't jeopardize your most important relationships.
                  </p>
                </div>

                <div className="group">
                  <span className="icon" />
                  <p>
                    Your favorite home partner from search to sale.
                  </p>
                </div>

              </SmartLoading>

              <SmartLoading animation="fade-in"
                move="from-bottom-to-top"
                distance={100}
                speed={1500}
                wait={1400}
              >
                <div className="hidden-md hidden-lg">
                  <Link to="quiz">
                    <span className="button">
                      I’m ready for home
                    </span>
                  </Link>
                </div>
                <div className="hidden-xs hidden-sm">
                  <span className="button" onClick={ () => this.props.showQuiz(true) }>
                    I’m ready for home
                  </span>
                </div>
              </SmartLoading>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
