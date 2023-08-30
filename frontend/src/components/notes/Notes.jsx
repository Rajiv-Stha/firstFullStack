import React from "react";
import "./notes.css";
import Card from "../card/Card";

const Notes = ({ notes, fetching }) => {
  return (
    <div className="note_container">
      {notes.map((item) => {
        return <Card item={item} key={item._id} fetching={fetching} />;
      })}
    </div>
  );
};

export default Notes;
