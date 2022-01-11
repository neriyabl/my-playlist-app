import "./App.css";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";

function App() {
  const ref = useRef(5);
  const songlist = [
    { id: 1, name: "song1", artist: "artist1" },
    { id: 2, name: "song2", artist: "artist2" },
    { id: 3, name: "song3", artist: "artist3" },
    { id: 4, name: "song4", artist: "artist4" },
    { id: 5, name: "song5", artist: "artist5" },
  ];
  return (
    <div className="App">
      <Header />
      <AddItemForm />
      <SongList songs={songlist} />
      {/* <Plyr /> */}
    </div>
  );
}

export default App;
