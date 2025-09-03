import React from 'react'

export default function WorkflowItems({image, title, subtitle}) {
  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
