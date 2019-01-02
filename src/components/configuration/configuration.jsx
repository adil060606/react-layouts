import React, { Component } from "react";
import ConfigComponents from "./configComponents";
import ConfigLayout from "./configLayout";

class Configuration extends Component {
  state = {};

  render() {
    return (
      <span className="h100">
        <div className="config-left-panel h100">
          <ConfigComponents />
        </div>
        <div className="config-right-panel h100">
          <ConfigLayout />
        </div>
      </span>
    );
  }
}

export default Configuration;
