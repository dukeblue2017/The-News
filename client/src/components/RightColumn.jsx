import React, { Component} from 'react';
import Story from './Story';

class RightColumn extends Component{
  constructor(props) {
    super(props)
    this.state = {
      rightArticles: [],
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const rightArticles = nextProps.articles.filter( (article) => {
      return article.column === 'right'
    })
    return {'rightArticles': rightArticles};
  }

  render(){
    return(
      <div className="column right-column">
        {this.state.rightArticles.map((article) => {
          return <Story title={article.ourTitle||article.originalTitle} key={article.ourTitle||article.originalTitle} />
        })}
      </div>
    );
  }
}

export default RightColumn;