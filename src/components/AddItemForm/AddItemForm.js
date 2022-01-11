import React, { useRef, useState } from "react";

function AddItemForm() {
  const [val1, setVal1] = useState();
  const val2 = useRef();
  return (
    <div className="">
      <input
        onChange={({ target: { value } }) => {
          setVal1(value);
        }}
        ref={val2}
      />
      <button
        onClick={() => {
          console.log(val1);
          console.log("--------------");
          console.log(val2.current.value);
        }}
      >
        +
      </button>
    </div>
  );
}

export default AddItemForm;
