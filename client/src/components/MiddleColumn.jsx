import React, { Component} from 'react';
import Story from './Story';

class MiddleColumn extends Component{
  constructor(props) {
    super(props)
    this.state = {
      middleArticles: [],
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const middleArticles = nextProps.articles.filter( (article) => {
      return article.column === 'middle'
    })
    return {'middleArticles': middleArticles};
  }

  render(){
    return(
      <div class="column middle-column">
        <div class="content-header">Story of the Day</div>
        {this.state.middleArticles.map((article) => {
          return <Story title={article.ourTitle||article.originalTitle} />
        })}
      </div>
    );
  }
}

export default MiddleColumn;