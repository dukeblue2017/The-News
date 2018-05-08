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
    const dateObj = new Date();
    const myDate = {
      year: dateObj.getFullYear().toString(),
      month: (dateObj.getMonth() + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 }),
      day: dateObj.getDate().toLocaleString('en-us', { minimumIntegerDigits: 2 }),
    };
    const dateString = `${myDate.year}${myDate.month}${myDate.day}`;
    axios({
      method: 'GET',
      url: `http://localhost:3000/stories?date=${dateString}`,
    }).then((res) => {
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
