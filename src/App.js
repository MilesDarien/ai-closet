import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useSwipeable, Swipeable } from 'react-swipeable';

let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
let links = ["/AiCoordinate","/LetMeChoose", "/Store", "/Outfits"];
class Main extends Component {
  state = {
    menuArray: arr,
    menuLinks: links,
  };

//  handleLinks = () => {
//    let spliceLinks = links.slice();
//    spliceLinks.push(spliceLinks[0]);
//   spliceLinks.shift(spliceLinks[0]);
//   links = spliceLinks;
//   this.setState({ menuLinks: links });
//  }
  handleMenuUp = () => {
    let menuArray = arr.slice();
    menuArray.push(menuArray[0]);
    menuArray.shift(menuArray[0]);
    let spliceLinks = links.slice();
   spliceLinks.push(spliceLinks[0]);
  spliceLinks.shift(spliceLinks[0]);
  links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr });
    this.setState({ menuLinks: links });
    
  };

//   handleLinksDown = () => {
//    let spliceLinks = links.slice();
//    let linkTop = spliceLinks.pop();
//   spliceLinks.unshift(linkTop);
//   links = spliceLinks;
//   this.setState({ menuLinks: links });
//  }

  handleMenuDown = () => {
    let menuArray = arr.slice();
    let menuTop = menuArray.pop();
    menuArray.unshift(menuTop);
    let spliceLinks = links.slice();
   let linkTop = spliceLinks.pop();
  spliceLinks.unshift(linkTop);
  links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr });
    this.setState({ menuLinks: links });
  };
    


  render() {
    let links = this.state.menuLinks;
    let names = this.state.menuArray;
    
  const config ={
    onSwipedUp: () => this.handleMenuUp(),
    onSwipedDown: ()=> this.handleMenuDown(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  };



  // const handlers = useSwipeable({ onSwipedUp: (eventData) => eventHandler, ...config })

    
    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <Swipeable className="full-height slide-nav" {...config}>
            <ul>
              {/* {this.state.menuArray.map(menuArray => (
                <li key={menuArray}>
                 {this.state.menuLinks.map(menuLinks => (<Link to={menuLinks}>{menuArray}</Link>))}
                </li>
              ))} */}
              <li>
              <Link to={links[0]}>{names[0]}</Link>
              </li>
              <li>
              <Link to="#">{names[1]}</Link>
              </li>
              <li>
              <Link to="#">{names[2]}</Link>
              </li>
              <li>
              <Link to="#">{names[3]}</Link>
              </li>
            </ul>
          </Swipeable>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
