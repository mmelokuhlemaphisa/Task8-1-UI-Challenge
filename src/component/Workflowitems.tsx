import React from 'react'

interface WorkflowProps {
  image :string;
  title: string;
  subtitle: string;
}

export default function WorkflowItems({ image, title, subtitle }: WorkflowProps) {
  return (
    <div>
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <img src={image} />
      </div>

      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h3>{title}</h3>
      </div>

      <p>{subtitle}</p>
    </div>
  );
}
