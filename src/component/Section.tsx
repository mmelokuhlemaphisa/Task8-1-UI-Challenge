import React from "react";

export function Section({ title, subtitle }) {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}

export function Section2({ title, subtitle }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          alignItems: "start",
          
        }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
