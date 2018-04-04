import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <button type='button' className='btn btn-primary btn-lg btn-block'>
      Open in Google Maps
    </button>
  </div>
);
