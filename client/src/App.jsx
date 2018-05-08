import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import LeftColumn from './components/LeftColumn';
import MiddleColumn from './components/MiddleColumn';
import RightColumn from './components/RightColumn';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/stories')
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <LeftColumn articles={this.state.articles} />
          <MiddleColumn articles={this.state.articles} />
          <RightColumn articles={this.state.articles} />
        </div>
      </div>
    );
  }
}

export default App;
