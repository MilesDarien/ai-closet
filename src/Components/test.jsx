import React, { Component } from "react";
class Test extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <button className="btn btn-nofill">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <nav id="slide-nav" class="full-height">
            <ul>
              <li className="font-60px">Choose for me</li>
              <li className="font-50px">Let me choose</li>
              <li className="font-40px">Store</li>
              <li className="font-30px">Outfits</li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Test;
