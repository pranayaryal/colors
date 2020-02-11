import React from 'react'

const Card = props => {
  console.log(props.heading);
  return (
    <div className="card">
      <div className="card-heading">{props.heading}</div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
};

export default Card;