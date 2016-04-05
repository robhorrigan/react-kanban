import React from 'react'; // eslint-disable-line no-unused-vars
import Lane from './Lane.jsx'; // eslint-disable-line no-unused-vars

export default ({lanes}) => {
  return (
    <div className="lanes">{lanes.map(lane =>
      <Lane className="lane" key={lane.id} lane={lane} />
    )}</div>
  );
};
