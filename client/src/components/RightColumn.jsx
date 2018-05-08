import React, { Component } from 'react';
import Story from './Story';

class RightColumn extends Component {
  static getDerivedStateFromProps(nextProps) {
    const rightArticles = nextProps.articles.filter(article => article.column === 'right');
    return { rightArticles };
  }

  constructor(props) {
    super(props);
    this.state = {
      rightArticles: [],
    };
  }

  render() {
    return (
      <div className="column right-column">
        {this.state.rightArticles.map(article => <Story title={article.ourTitle || article.originalTitle} URL={article.URL} key={article.ourTitle || article.originalTitle} />)}
      </div>
    );
  }
}

export default RightColumn;
