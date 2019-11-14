import React, { Component } from "react";
let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
// function testTest(x) {
//   let menuArray = x.slice();
//   menuArray.push(menuArray[0]);
//   menuArray.shift(menuArray[0]);
//   arr = menuArray;
//   console.log(arr);
// }
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { menuArray: arr };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval();
  // }

  update() {
    this.setState({
      menuArray: arr
    });
  }
  handleClick() {
    let menuArray = arr.slice();
    menuArray.push(menuArray[0]);
    menuArray.shift(menuArray[0]);
    arr = menuArray;
  }

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
          <nav id="slide-nav" class="full-height" onClick={this.handleClick}>
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
