import React from "react";
import Song from "../Song/Song";

function SongList({ songs }) {
  return (
    <div>
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongList;
