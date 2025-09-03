import React from "react";

export default function Button({ text, color }) {
  return (
    <>
      <button
        type="button"

        style={{ padding: "10px", backgroundColor: color, border:"none", borderRadius:"30px" }}
      >
        {text}
      </button>
    </>
  );
}
