import React, { Component } from "react";
import { connect } from "react-redux";

class ConfigComponents extends Component {
  constructor(props) {
    super(props);

    this.components = props.components;
  }

  render() {
    return (
      <div>
        <h4>components</h4>
        {this.components.map(component => this.generateOneComponent(component))}
      </div>
    );
  }

  generateOneComponent(component) {
    return (
      <div key={component.id}>
        <img
          draggable={true}
          onDragStart={e => this.drag(e, component)}
          className="image-component"
          src={component.url}
          alt=""
        />
      </div>
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
