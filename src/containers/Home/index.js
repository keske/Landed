import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import { TopImage } from 'components/TopImage';
import { Subscribe } from 'components/Subscribe';
import { Toggle } from 'components/Toggle';
import { YouCan } from 'components/YouCan';
import { ImageBlock } from 'components/ImageBlock';
import { HowItWorks } from 'components/HowItWorks';
import { FAQ } from 'components/FAQ';

const metaData = {
  title: 'Landed',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { loaded } = this.state;

    function renderContent() {
      return (
        <ReactCSSTransitionGroup transitionName="page-parts-animation"
                                 transitionAppear
                                 transitionAppearTimeout={ 3000 }>
          <Subscribe />
          <Toggle />
          <YouCan />
          <ImageBlock />
          <HowItWorks />
          <FAQ />
        </ReactCSSTransitionGroup>
      );
    }

    return (
      <section>
        <DocumentMeta { ...metaData } />
        <TopImage { ...this.props } />
          {
            loaded ? renderContent() : null
          }
      </section>
    );
  }
}
