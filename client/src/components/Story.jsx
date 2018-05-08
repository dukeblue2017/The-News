import React, { Component} from "react";

class Story extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="story">
        <div className="story-title">
          <a href={this.props.URL}>{this.props.title}</a>
        </div>
        <div className="story-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}

export default Story;