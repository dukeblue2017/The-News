import React, { Component } from 'react';
import Story from './Story';

class MiddleColumn extends Component {
  static getDerivedStateFromProps(nextProps) {
    const middleArticles = nextProps.articles.filter(article => article.column === 'middle');
    return { middleArticles };
  }

  constructor(props) {
    super(props);
    this.state = {
      middleArticles: [],
    };
  }

  render() {
    return (
      <div className="column middle-column">
        {this.state.middleArticles.map(article => <Story title={article.ourTitle || article.originalTitle} URL={article.URL} key={article.ourTitle || article.originalTitle} />)}
      </div>
    );
  }
}

export default MiddleColumn;
