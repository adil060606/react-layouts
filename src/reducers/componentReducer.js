import _ from "lodash";

const nComponents = 4;

export default function componentReducer(
  state = getInitialComponents(),
  { type, payload }
) {
  return state;
}

function getInitialComponents() {
  const components = _.range(nComponents).map(i => {
    return {
      id: i,
      url: `https://picsum.photos/120?image=${i * 102}`
    };
  });

  return components;
}
