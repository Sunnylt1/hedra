import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTasks, selectTasks } from "./tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <h3>Task Name: {task.name}</h3>
              <h3>Task Description: {task.description}</h3>
              <h3>Task Complete 'True | False': {task.isComplete}</h3>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
