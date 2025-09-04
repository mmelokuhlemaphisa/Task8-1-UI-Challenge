import React from 'react'

interface LogoProp {
  icon: string;
}

export default function Logosection({ icon }: LogoProp) {
  return (
    <div>
      <img src={icon} alt="" />
    </div>
  );
}
