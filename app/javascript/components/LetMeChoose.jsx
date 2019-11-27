import React, { Component } from "react";
import { Link } from "react-router-dom";

class LetMeChoose extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="top-nav">
          <ul>
            <a href="#">
              <li>Tops</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Bottoms</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Accesories</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Others</li>
            </a>
          </ul>
        </nav>
        <div className="display-settings">
          <span class="list"></span>
          <span>|</span>
          <span class="full"></span>
          <span>|</span>
          <span class="tiles"></span>
        </div>
        <main>
          <h1>Current Selected Items</h1>
          <div class="items">
            <p>No items selected</p>
          </div>
        </main>
        <nav class="bottom-nav">
          <Link to="/app" class="btn-back">
            Back
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default LetMeChoose;
