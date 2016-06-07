import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import { IntroImage } from '../IntroImage';
import { ImageBlock } from '../ImageBlock';
// import { HowItWorks } from '../HowItWorks';
import { Employer } from './_employer';
import { Alumni } from './_alumni';
import { Schools } from './_schools';

/* component styles */
import { styles } from './styles/styles.scss';

export class ProductsPage extends Component {

  static propTypes = {
    showQuiz: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      schoolsExpand: false,
      employerExpand: false,
      alumniExpand: false,
    };

    this.showSchools = this.showSchools.bind(this);
    this.showEmployer = this.showEmployer.bind(this);
    this.showAlumni = this.showAlumni.bind(this);
  }

  showSchools() {
    this.setState({ schoolsExpand: true });
  }

  showEmployer() {
    this.setState({ employerExpand: true });
  }

  showAlumni() {
    this.setState({ alumniExpand: true });
  }

  render() {
    const { schoolsExpand, employerExpand, alumniExpand } = this.state;

    const intro = {
      title: 'Help people you care about buy a home, so they stay',
      text: "Not everyone can get help from Mom or Dad for a down payment on their first home. Access to a Landed Fund can provide a similar boost. </br></br> Investing in a Landed Fund is not charity. It's ownership in a diversified, urban real estate portfolio without the pain of rental property.",
      image: 'services',
    };

    const imageBlockProps = {
      text: 'Have other </br>Landed Fund ideas?</br></br>Let us know!',
      imageClass: 'services',
    };

    return (
      <section>
        <IntroImage { ...intro } />
        <div className={ `${styles}` }>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="hidden-md hidden-lg sign-up-block">
                  <Link to="quiz">
                    <span className="button">
                      Learn More
                    </span>
                  </Link>
                </div>
                <div className="hidden-xs hidden-sm sign-up-block">
                  <span className="button" onClick={ () => this.props.showQuiz(true) }>
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="loan-icon" />
                <p className="title">
                  Schools &<br />Districts
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Independent schools, school districts, and charter networks can better recruit and retain faculty by helping them become homeowners in the community in which they teach. It also gives members of the community, who have money to invest in real estate, a way to sustainably support quality educators.
                </p>

                <span
                  className={ `button ${ schoolsExpand && 'hide' }` }
                  onClick={ this.showSchools }
                >
                  Details
                </span>

                <p className={`more-known ${!schoolsExpand && 'hide'}`}>
                  Partnering with Landed is as simple as 1, 2, 3. Outside of helping identify potential sources of capital, starting a Landed Fund requires no ongoing cost or overhead:
                </p>
                <div className={`expandet-list list ${!schoolsExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Engage Landed.</strong>  Understand the potential demand and determine who the benefit applies to (all faculty, tenured faculty, etc).
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${!schoolsExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Work with Landed to recruit the funds.</strong> In addition to your school's network, Landed has strong relationships with wealth sources across the country.
                    </p>
                  </div>
                </div>
                <div className={`expandet-list list ${!schoolsExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">3.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Launch the Benefit.</strong> Once the benefit is launched, faculty, staff and investors will deal directly with Landed. Landed will manage all legal and regulatory compliance in addition to homebuyer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { schoolsExpand && <Schools /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="lease-icon" />
                <p className="title">
                  Unions &<br /> Employers
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Companies, not-for-profit organizations, government agencies and unions can better recruit and retain employees by helping them become homeowners in the communities in which they work. Help your own while achieving target investment returns on company reserves or retirement funds.
                </p>
                <span
                  className={ `button ${ employerExpand && 'hide' }` }
                  onClick={ this.showEmployer }
                >
                  Details
                </span>

                <p className={`more-known ${!employerExpand && 'hide'}`}>
                  Partnering with Landed is as simple as 1, 2, 3. Outside of helping identify potential sources of capital, starting a Landed Fund requires no ongoing cost or overhead:
                </p>
                <div className={`expandet-list list ${ !employerExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                    <strong>Engage Landed.</strong>  Understand the potential demand and determine who the benefit applies to (all employees, senior employees, etc).
                  </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !employerExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Identify the Source of Funds.</strong> If company reserves or retirement funds are not available, Landed can also form a fund from the private investments of qualified employees.
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !employerExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">3.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Launch the Benefit.</strong> Once the benefit is launched, employees and investors will deal directly with Landed. Landed will manage all legal and regulatory compliance in addition to homebuyer support.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          { employerExpand && <Employer /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="ownership-icon" />
                <p className="title">
                  Affiliate<br />Networks
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Alumni of a specific university or of another affiliate group can support their community without having to give a gift. Build a diversified, urban real estate portfolio while helping young alumni access homeownership.
                </p>

                <span
                  className={ `button ${ alumniExpand && 'hide' }` }
                  onClick={ this.showAlumni }
                >
                  Details
                </span>

                <p className={`more-known ${!alumniExpand && 'hide'}`}>
                  Partnering with Landed is as simple as 1, 2, 3. Outside of helping identify potential sources of capital, starting a Landed Fund requires no ongoing cost or overhead:
                </p>
                <div className={`expandet-list list ${ !alumniExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                    <strong>Engage Landed.</strong>  Estimate the potential demand and determine who the benefit applies to (all alumni, local alumni, etc).
                  </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !alumniExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Identify the Investment Champions.</strong> In our experience, one or two community champions are necessary to seed the fund and recruit other alumni investors.
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !alumniExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">3.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Launch the Fund.</strong> Once the benefit is launched, alumni and investors will deal directly with Landed. Landed will manage all legal and regulatory compliance in addition to homebuyer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { alumniExpand && <Alumni /> }
        </div>
        <ImageBlock { ...imageBlockProps } />
      </section>
    );
  }
}
