import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={ `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${props.location}` }>
      Open in Google Maps
    </a>
  </div>
);
