import React, { Component } from "react";
import GridLayout from "react-grid-layout";

class LayoutListItem extends Component {
  static defaultProps = {
    //rowHeight: 30
  };

  constructor(props) {
    super(props);

    this.setSelectedLayout = props.setSelectedLayout;
    this.updateLayout = props.updateLayout;
  }

  generateDOM() {
    return this.props.layout.layout.map((layoutItem, nLayoutItem) => {
      return (
        <div
          key={nLayoutItem}
          onDrop={this.drop.bind(this, nLayoutItem)}
          onDragOver={this.allowDrop.bind(this)}
        >
          {layoutItem.componentUrl && (
            <img src={layoutItem.componentUrl} alt="" />
          )}
        </div>
      );
    }); //
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drop(nLayoutItem, e) {
    e.preventDefault();
    const component = e.dataTransfer.getData("component");
    // action required: add component componentId to be a child of layout item nLayoutItem
    this.updateLayout(nLayoutItem, component);
  }

  render() {
    const layout = this.props.layout;
    const layoutClass = `layout-card ${
      layout.isSelected ? "selected-layout-card" : ""
    }`;
    return (
      <span
        className={layoutClass}
        style={{
          height: this.props.updateLayout ? "400px" : "200px",
          width: this.props.updateLayout ? "70%" : "30%",
          minWidth: this.props.updateLayout ? "670px" : "380px"
        }}
        onClick={() => this.setSelectedLayout && this.setSelectedLayout(layout)}
      >
        <GridLayout
          layout={layout.layout}
          className="layout"
          rowHeight={!this.props.updateLayout ? 80 : 160}
          width={!this.props.updateLayout ? 400 : 800}
          // height={200}
        >
          {this.generateDOM()}
        </GridLayout>
      </span>
    );
  }
}

export default LayoutListItem;
