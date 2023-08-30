import React, { useState } from "react";
import "./inputbox.css";
import axios from "axios";

const InputBox = ({ fetching }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setDesc(value);
    }
  };
  const handleAdd = async () => {
    let newNotes = {
      title,
      desc,
    };
    try {
      const { data, status } = await axios.post(
        "http://localhost:8000/notes",
        newNotes
      );
      if (status === 200) {
        fetching();
      }
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDesc("");
  };
  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="enter title"
        name="title"
        onChange={handleChange}
        value={title}
      />
      <input
        type="text"
        placeholder="enter description"
        name="desc"
        onChange={handleChange}
        value={desc}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputBox;
