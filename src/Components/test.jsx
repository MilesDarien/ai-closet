import React, { Component } from "react";

class Test extends Component {
  state = {
    menuArray: ["Choose for me", "Let me choose", "Store", "Outfits"]
  };

  // arrayPushShift = pushShift => {
  //   console.log(pushShift);

  //   this.setState({});
  // };
  render() {
    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <nav id="slide-nav" class="full-height">
            <ul>
              {this.state.menuArray.map(menuArray => (
                <li key={menuArray}>
                  <a href={"#"}>{menuArray}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Test;
