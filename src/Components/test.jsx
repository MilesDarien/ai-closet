import React, { Component } from "react";
let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
class Test extends Component {
  state = {
    menuArray: arr
  };

  handleMenu = () => {
    let menuArray = arr.slice();
    menuArray.push(menuArray[0]);
    menuArray.shift(menuArray[0]);
    arr = menuArray;
    this.setState({ menuArray: arr });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <nav id="slide-nav" class="full-height" onClick={this.handleMenu}>
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
