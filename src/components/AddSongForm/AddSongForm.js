import React, { useRef } from "react";

function AddSongForm({ onAddSong }) {
  const songNameInput = useRef();
  return (
    <div className="">
      <form>
        <input ref={songNameInput} />
        <button
          onClick={(e) => {
            e.preventDefault();
            const { current } = songNameInput;
            // validate input is not empty
            if (!current.value) return;
            onAddSong(current.value);
            current.value = "";
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddSongForm;
