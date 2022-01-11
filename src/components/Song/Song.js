import React from "react";

function Song({ song: { name, artist } }) {
  return (
    <div>
      <span>{name}</span>
      <span>{artist}</span>
      <button>-</button>
    </div>
  );
}

export default Song;
