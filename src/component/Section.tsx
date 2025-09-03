import React from 'react'

export default function Section({title, subtitle}) {
  return (
    <>
      <div 
      style={{ 
        alignItems: "center", 
        textAlign: "center"
         }}>
          
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
