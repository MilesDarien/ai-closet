import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
// Array declaration. I do it here for easier manipulation
let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
let links = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];

class App extends Component {
  state = {
    menuArray: arr,
    menuLinks: links,
    menuData: [
      { id: 1, data: <Link to={links[0]}>{arr[0]}</Link> },
      { id: 2, data: <Link to="#">{arr[1]}</Link> },
      { id: 3, data: <Link to="#">{arr[2]}</Link> },
      { id: 4, data: <Link to="#">{arr[3]}</Link> }
    ]
  };

  render() {
    //Swipe gesture settings for menu calling the handleMenu function
    const config = {
      onSwipedUp: () => this.handleMenu("up"),
      onSwipedDown: () => this.handleMenu("down"),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };

    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <Swipeable className="full-height slide-nav" {...config}>
            <ul>
              {this.state.menuData.map(menu => (
                <li key={menu.id}>{menu.data}</li>
              ))}
            </ul>
          </Swipeable>
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

  //Handles menu movement by input of either "up" or "down" into (direction)
  handleMenu = direction => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    if (direction === "up") {
      this.pushShift(menuArray, 0);
      this.pushShift(spliceLinks, 0);
    }
    if (direction === "down") {
      this.popUnshift(menuArray);
      this.popUnshift(spliceLinks);
    }

    // then updates the state
    links = spliceLinks;
    arr = menuArray;
    this.setState({
      menuArray: arr,
      menuLinks: links,
      menuData: [
        { id: 1, data: <Link to={links[0]}>{arr[0]}</Link> },
        { id: 2, data: <Link to="#">{arr[1]}</Link> },
        { id: 3, data: <Link to="#">{arr[2]}</Link> },
        { id: 4, data: <Link to="#">{arr[3]}</Link> }
      ]
    });
  };
}

export default App;
