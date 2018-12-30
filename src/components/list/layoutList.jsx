import React from "react";
import LayoutListItem from "../layoutListItem";
import { setSelectedLayout } from "../../actions/layoutActions";
import { connect } from "react-redux";

const LayoutList = ({ layouts, updateLayout, setSelectedLayout }) => (
  <div>
    <center>
      <h2>Layouts Screen</h2>
      {layouts.map(layout => (
        <LayoutListItem
          key={layout.id}
          layout={layout}
          setSelectedLayout={setSelectedLayout}
        />
      ))}
    </center>
  </div>
);

const mapStateToProps = state => {
  return { layouts: state.layouts };
};

const mapDispatchToProps = dispatch => ({
  setSelectedLayout: layout => {
    return dispatch(setSelectedLayout(layout));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutList);
