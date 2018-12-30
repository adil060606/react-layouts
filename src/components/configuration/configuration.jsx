import React, { Component } from "react";
import ConfigComponents from "./configComponents";
import ConfigLayout from "./configLayout";

class Configuration extends Component {
  state = {};

  render() {
    return (
      <span>
        <div className="config-left-panel">
          <ConfigComponents />
        </div>
        <div className="config-right-panel">
          <ConfigLayout />
        </div>
      </span>
    );
  }
}

export default Configuration;
