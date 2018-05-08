import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.state = {
      month: months[date.getMonth()],
      day: date.getDate(),
      year: date.getFullYear(),
    };
  }

  render() {
    return (
      <div className="header">
        <div className="site-title">The News</div>
        <div className="date">The Day of {this.state.month} {this.state.day}, {this.state.year}</div>
      </div>
    );
  }
}

export default Header;
