import { UPDATE_LAYOUT, SET_SELECTED_LAYOUT } from "../actions/layoutActions";
import _ from "lodash";

const nLayouts = 6;
const nAreasInLayout = 5;

export default function layoutReducer(
  state = getInitialLayouts(),
  { type, payload }
) {
  switch (type) {
    case UPDATE_LAYOUT: {
      // payload: {nLayoutItem:  componenet:   }
      // Having a selected layout, sets its nLayoutItem to contain the given component
      const newLayouts = state.map(layout =>
        cloneObjectWithNewValues(layout, {})
      );

      const selectedLayout = getSelectedLayout(newLayouts);
      if (selectedLayout) {
        selectedLayout.layout[payload.nLayoutItem].componentUrl =
          payload.component;
      }
      return newLayouts;
    }
    case SET_SELECTED_LAYOUT: {
      // payload: {layoutId: }
      // sets the layouts with appropriate isSelected attribute
      const newLayouts = state.map(layout =>
        cloneObjectWithNewValues(layout, {
          isSelected: layout.id === payload.layoutId
        })
      );
      return newLayouts;
    }

    default:
      return state;
  }
}

function getSelectedLayout(layouts) {
  const selectedLayout = layouts.filter(layout => layout.isSelected);
  return (selectedLayout.length && selectedLayout[0]) || undefined;
}

function cloneObjectWithNewValues(object, newValues) {
  return { ...object, ...newValues }; //Object.assign({}, object, newValues);
}

function getInitialLayouts() {
  const layouts = _.range(nLayouts).map(nLayout => ({
    id: nLayout,
    isSelected: false,
    layout: generateOneLayout()
  }));

  function generateOneLayout() {
    return _.range(nAreasInLayout).map(i => {
      const w = Math.ceil(Math.random() * 2);
      const h = Math.ceil(Math.random() * 2);
      return {
        x: i * 2,
        y: 0,
        w: w,
        h: h,
        i: i.toString(),
        static: true
      };
    });
  }

  return layouts;
}
