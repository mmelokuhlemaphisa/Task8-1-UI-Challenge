import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
}

export function Section({ title, subtitle }: SectionProps) {
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

export function Section2({ title, subtitle }: SectionProps) {
  return (
    <>
      <div
        className="section"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>{title}</h3>

        <p>{subtitle}</p>
      </div>
    </>
  );
}
