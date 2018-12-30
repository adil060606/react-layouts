import React, { Component } from "react";
import GridLayout from "react-grid-layout";

class LayoutListItem extends Component {
  static defaultProps = {
    rowHeight: 30
  };

  constructor(props) {
    super(props);

    this.setSelectedLayout = props.setSelectedLayout;
    this.updateLayout = props.updateLayout;
  }

  generateDOM() {
    const that = this;
    return this.props.layout.layout.map((layoutItem, nLayoutItem) => {
      return (
        <div
          key={nLayoutItem}
          onDrop={that.drop.bind(that, nLayoutItem)}
          onDragOver={that.allowDrop}
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
    const that = this;
    return (
      <span
        className={layoutClass}
        onClick={() => that.setSelectedLayout && that.setSelectedLayout(layout)}
      >
        <GridLayout
          layout={layout.layout}
          className="layout"
          rowHeight={30}
          width={400}
          height={100}
        >
          {this.generateDOM()}
        </GridLayout>
      </span>
    );
  }
}

export default LayoutListItem;
