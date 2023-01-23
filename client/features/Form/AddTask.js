import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Task/tasksSlice";

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isComplete, setIsComplete] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ name, description, isComplete }));
    setName("");
    setDescription("");
    setIsComplete("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="isComplete">Status</label>
      <input
        name="isComplete"
        value={isComplete}
        onChange={(e) => setIsComplete(e.target.value)}
      />
      <div>
        <span></span>
        <button type="submit" className="button-34">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
