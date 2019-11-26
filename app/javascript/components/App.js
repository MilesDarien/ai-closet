import React, { Component } from "react";

let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
let links = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];

class Main extends Component {
  state = {
    menuArray: arr,
    menuLinks: links
  };

  render() {
    let links = this.state.menuLinks;
    let names = this.state.menuArray;

    // //Swipe gesture settings for menu
    // const config = {
    //   onSwipedUp: () => this.handleMenuUp(),
    //   onSwipedDown: () => this.handleMenuDown(),
    //   preventDefaultTouchmoveEvent: true,
    //   trackMouse: true
    // };

    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <div className="full-height slide-nav">
            <ul>
              <li>
                <a href="#">{names[0]}</a>
              </li>
              <li>
                <a href="#">{names[1]}</a>
              </li>
              <li>
                <a href="#">{names[2]}</a>
              </li>
              <li>
                <a href="#">{names[3]}</a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  //manipulates array of links and Names to move menu up
  pushShift = (array, x) => {
    array.push(array[x]);
    array.shift(array[x]);
  };

  //takes the array of names and links and shifts everything down
  popUnshift = array => {
    let popItem = array.pop();
    array.unshift(popItem);
  };

  handleMenuUp = () => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    this.pushShift(menuArray, 0);
    this.pushShift(spliceLinks, 0);
    links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr, menuLinks: links });
  };

  handleMenuDown = () => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    this.popUnshift(menuArray);
    this.popUnshift(spliceLinks);

    links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr, menuLinks: links });
  };
}

export default Main;
