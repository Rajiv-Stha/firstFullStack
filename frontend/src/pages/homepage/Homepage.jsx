import React, { useEffect, useState } from "react";
import InputBox from "../../components/inputBox/InputBox";
import Notes from "../../components/notes/Notes";
import axios from "axios";

const Homepage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    try {
      const { data, status } = await axios.get("http://localhost:8000/notes");
      console.log(data.message);
      setNotes(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="homepage">
      <InputBox fetching={fetching} />
      <Notes notes={notes} fetching={fetching} />
    </div>
  );
};

export default Homepage;
