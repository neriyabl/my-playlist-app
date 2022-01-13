import React from "react";
import Song from "../Song/Song";

function SongList({ songs, onDeleteSong }) {
  return (
    <div>
      {songs.map((song) => (
        <Song key={song.id} song={song} onDeleteSong={onDeleteSong} />
      ))}
    </div>
  );
}

export default SongList;
