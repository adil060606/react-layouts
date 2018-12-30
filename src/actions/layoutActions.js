export const UPDATE_LAYOUT = "layout:updateLayout";
export const SET_SELECTED_LAYOUT = "layout:setSelectedLayout";

export const updateLayout = (nLayoutItem, component) => ({
  type: UPDATE_LAYOUT,
  payload: {
    nLayoutItem: nLayoutItem,
    component: component
  }
});

export const setSelectedLayout = layout => ({
  type: SET_SELECTED_LAYOUT,
  payload: {
    layoutId: layout.id
  }
});
