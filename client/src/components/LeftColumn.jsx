import React, { Component} from 'react';
import Story from './Story';

class LeftColumn extends Component{
  constructor(props) {
    super(props)
    this.state = {
      leftArticles: [],
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const leftArticles = nextProps.articles.filter( (article) => {
      return article.column === 'left'
    })
    return {'leftArticles': leftArticles};
  }

  render(){
    return(
      <div class="column left-column">
        {this.state.leftArticles.map((article) => {
          return <Story title={article.ourTitle||article.originalTitle} />
        })}
      </div>
    );
  }
}

export default LeftColumn;