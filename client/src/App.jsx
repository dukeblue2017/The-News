import React, { Component} from 'react';
import './App.css';
import Story from './components/Story';
import axios from 'axios';
import LeftColumn from './components/LeftColumn';
import MiddleColumn from './components/MiddleColumn';
import RightColumn from './components/RightColumn';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/stories')
      .then((res) => {
        this.setState({
          articles: res.data,
        })
      })
  }

  render(){
    return(
      <div className="App">
        <div className="header">
          <div className="site-title">The News</div>
          <div className="date">The Day of April 25, 2018</div>
        </div>
        <div className="content">
          <LeftColumn articles={this.state.articles}/>
          <MiddleColumn articles={this.state.articles}/>
          <RightColumn articles={this.state.articles}/>
        </div>
      </div>
    );
  }
}

export default App;