import React from "react";


interface ButtonProps {
  text: string;
  color: string; 
}

export default function Button({ text, color }:ButtonProps) {
  return (
    
      <button
        type="submit"

        style={{ 
            padding: "10px",
             backgroundColor: color, 
             border:"none",
              borderRadius:"30px" }}
      >
        {text}
      </button>

  );
}
