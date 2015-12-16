import React, { Component } from 'react';

export class WhyDoesLandedExist extends Component {
  render() {
    return (
      <div className="container">
        <div className="row whyDoesLandedExist">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2 className="green">
              Why does Landed exist?
            </h2>
          </div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 text-center">
            <p>
              Homes are the dominant way that North Americans build wealth.  But over the last two decades, making a responsible home investment has become more and more difficult, if not impossible.
            </p>
            <p>
            Here’s a little story to help tell the tale of why we’re  so focused on changing the housing market, forever:
            </p>
            <p className="black second-paragraph">
              Let’s take a look at two friends, Richie and Susan.
            </p>
          </div>
        </div>

        <div className="row whyDoesLandedExist two-folks">
          <div className="col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-left">
            <p className="black">
              Richie is a married middle-aged man.  Richie has had a pretty successful life.
            </p>
            <p>
              ◦ His family’s net worth is just over $3,000,000 dollars.
              <br />
              ◦ He has less than 20% of his wealth in housing.
              <br />
              ◦ He has extremely low levels of debt relative to what he owns.
              <br />
              ◦ Almost all of his wealth is in diversified financial instruments (stocks, bonds, cash).
            </p>
          </div>
          <div className="col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-0 col-lg-offset-0 text-left">
            <p className="black">
              Susan is a young woman about to have her first child. She bought a house just four years ago.
            </p>
            <p>
              ◦ She also has been doing really well. Her family’s net worth is almost $250,000.
              <br />
              ◦ She, however, has almost 75% of her wealth in housing.
              <br />
              ◦ She also has high levels of debt.  She really had to stretch to buy her home.
            </p>
          </div>
        </div>

        <div className="row whyDoesLandedExist footer-text">
          <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-left">
            <p>
              During the ‘Great Recession’, people like Susan (a median homebuyer), lost over 35% of their net worth. People less wealthy than Susan lost everything. Many of them owed more on their mortgage then their house was worth (known as ‘being underwater’). In fact, today, almost eight years later, over 15% of US homeowners are still underwater on their homes.
            </p>
            <p>
              Millions of people like Susan buckled down to save money until they were back on solid ground. But saving money means fewer things are being purchased, which means less profits for companies, which means layoffs, which means less money for households, which means fewer things are being purchased… the economy goes into a tail spin.
            </p>
            <p>
              Some of Susan’s friends lost their jobs and fell behind on their mortgage payments. The banks foreclosed on them and got most of their mortgage loans back, but left Susan’s friends with nothing.  And who bought these homes? Well, companies that people like Richie disproportionately own through their already diversified portfolio. As a result, people like Richie only lost 10% of their net worth during the recession and quickly recovered.
            </p>
            <p>
              A version of this happens every time the real estate market corrects itself, which seems to happen every seven to twelve years.
            </p>
            <p>
              Buying a house with an overwhelming amount of institutional debt puts you at risk. Everyone buying their homes with that kind of debt puts the whole economy at risk. And when credit bubbles burst, the wealthy get wealthier at the expense of everyone else.
            </p>
            <p>
              Let's make homeowners more financially resilient.  Let's make it incredibly simple for two partners to join forces to pay for home.  Let's make it so easy that anyone can be a co-investor in the neighborhoods and cities they know and love.  Only then do all of us have a chance to build wealth sustainably.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
