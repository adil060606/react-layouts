import React, { Component } from "react";
import { connect } from "react-redux";

class ConfigComponents extends Component {
  constructor(props) {
    super(props);

    this.components = props.components;
  }

  render() {
    return (
      <div className="h100">
        <div className="title-div component-title-div">
          <h4 className="components-title">components</h4>
        </div>
        {this.components.map(component => this.generateOneComponent(component))}
      </div>
    );
  }

  generateOneComponent(component) {
    return (
      <img
        key={component.id}
        draggable={true}
        onDragStart={e => this.drag(e, component)}
        className="image-component"
        src={component.url}
        alt=""
      />
    );
  }

  drag(e, component) {
    e.dataTransfer.setData("component", component.url);
  }
}

const mapStateToProps = state => {
  return { components: state.components };
};

export default connect(mapStateToProps)(ConfigComponents);
