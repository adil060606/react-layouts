import React from "react";
import LayoutListItem from "../layoutListItem";
import { updateLayout } from "../../actions/layoutActions";
import { connect } from "react-redux";

const ConfigLayout = ({ layout, updateLayout }) => (
  <div>
    <div className="title-div">
      <h2 className="components-title">Configuration Screen</h2>
    </div>
    <center>
      {layout && <LayoutListItem layout={layout} updateLayout={updateLayout} />}
      {!layout && (
        <div>
          <h2>
            <center className="no-selected-layout">
              Please select a layout to configure in the layout list view
            </center>
          </h2>
        </div>
      )}
    </center>
  </div>
);

const mapStateToProps = state => {
  const selectedLayouts = state.layouts.filter(layout => layout.isSelected);
  return { layout: selectedLayouts.length ? selectedLayouts[0] : undefined };
};

const mapDispatchToProps = dispatch => ({
  updateLayout: (nLayoutItem, component) =>
    dispatch(updateLayout(nLayoutItem, component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigLayout);
