import React, { Component } from 'react';
import Story from './Story';

class LeftColumn extends Component {
  static getDerivedStateFromProps(nextProps) {
    const leftArticles = nextProps.articles.filter(article => article.column === 'left');
    return { leftArticles };
  }

  constructor(props) {
    super(props);
    this.state = {
      leftArticles: [],
    };
  }

  render() {
    return (
      <div className="column left-column">
        {this.state.leftArticles.map(article => <Story title={article.ourTitle || article.originalTitle} URL={article.URL} key={article.ourTitle || article.originalTitle} />)}
      </div>
    );
  }
}

export default LeftColumn;
