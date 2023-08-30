import React, { useState } from "react";
import "./card.css";
import axios from "axios";

const Card = ({ item, fetching }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleDelete = async (id) => {
    try {
      const { data, status } = await axios.delete(
        `http://localhost:8000/notes/${id}`
      );
      if (status === 200) {
        fetching();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDoubleClick = () => {
    setIsEditable(true);
  };
  const handleBlur = () => {
    alert("clicked out of the card ");
  };

  return (
    <div className="card" onDoubleClick={handleDoubleClick} title="card">
      <div className="info">
        <h3 className="title" contentEditable={isEditable}>
          {item.title}{" "}
        </h3>
        <p className="desc" contentEditable={isEditable}>
          {item.desc}{" "}
        </p>
      </div>
      <button onClick={() => handleDelete(item._id)}>Delete</button>
    </div>
  );
};

export default Card;
