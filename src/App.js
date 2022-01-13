import "./App.css";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";
import "plyr-react/dist/plyr.css";
import { useRef, useState } from "react";

function App() {
  const idsRef = useRef(1);
  const [songs, setSongs] = useState([]);

  const addSong = (name) => {
    setSongs([...songs, { name, artist: "artist", id: idsRef.current }]);
    idsRef.current++;
  };

  return (
    <div className="App">
      <Header />
      <AddSongForm onAddSong={addSong} />
      <SongList songs={songs} />
    </div>
  );
}

export default App;
