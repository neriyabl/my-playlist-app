import React from "react";
import "./Song.css";

function Song({ song: { id, name, artist }, onDeleteSong }) {
  return (
    <div className="song row">
      <div className="col">
        <div className="row">
          <h3>Name:</h3>
          {name}
        </div>
        <div className="row">
          <h4>Artist:</h4>
          {artist}
        </div>
      </div>
      <button onClick={() => onDeleteSong(id)}>-</button>
    </div>
  );
}

export default Song;
