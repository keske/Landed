import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

const QuestionsAndAnswers = [
  {
    question: "How do I sell my portion of a home if I don't own the whole thing?",
    answer: "Landed is creating a marketplace for exactly these types of purchases. Because the person living in the home pays rent on the share they don't own, everyone else who co-invests in the home receives a monthly rent check. This guarantees that there will be others willing to become co-investors so they too can receive regular rental payments (in addition to any wealth generated from increasing home values).<br /><br />As the marketplace is built, Landed will give pioneering investors a number of additional guarantees to make sure your investment is protected.",
  }, {
    question: 'Companies fail all the time. If landed fails, what happens to my home or investment?',
    answer: 'answer 2',
  }, {
    question: 'Why should I own less than 100% of my house? Why invest in partial properties?',
    answer: 'answer 3',
  },
];

export class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                Cold hard facts
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <ul className="questions">
                {
                  QuestionsAndAnswers.map(({ question }, key) =>
                  <li key={ key }>
                    <span
                      className={ currentQuestion === key ? 'active' : '' }
                      onClick={ () => { this.setState({ currentQuestion: key }); } }
                      dangerouslySetInnerHTML={{ __html: question }}>
                    </span>
                  </li>)
                }
              </ul>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-1">
              <ul className="answers">
                {
                  QuestionsAndAnswers.map(({ answer }, key) =>
                  <li
                    className={ currentQuestion === key ? 'active' : '' }
                    key={ key }
                    dangerouslySetInnerHTML={{ __html: answer }}>
                  </li>)
                }
              </ul>

              <Link to="faq">
                See comlete F.A.Q.
              </Link>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
