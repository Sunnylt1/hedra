import { CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskModal from "../modal/AddTaskModal";
import { fetchAllTasks, selectTasks } from "./tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const Tasks = useSelector(selectTasks);
  const [tasks, setTasks] = useState(Tasks);

  function selectTasksBy(e) {
    const value = e.target.value;
    const filterTasks =
      value === "all" ? Tasks : Tasks.filter((t) => t.isComplete === value);
    setTasks(filterTasks);
  }

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h1>View All Tasks</h1>
      <button className="button-34" onClick={() => setOpenModal(true)}>
        + New Task
      </button>
      {openModal && <AddTaskModal closeModal={setOpenModal} />}
      <span></span>
      <div>
        <label>Filter by Completion</label>
        <select onChange={selectTasksBy}>
          <option value="all">All Tasks</option>
          <option value="OPEN">Open</option>
          <option value="IN PROGRESS">In Progress</option>
          <option value="COMPLETE">Complete</option>
        </select>
      </div>
      <span></span>
      <span></span>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ justifyContent: "left" }}
      >
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <Card raised sx={{ width: 750, ml: 10, mb: 3, padding: "1em" }}>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Task Name: {task.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Task Description: {task.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Task Status: {task.isComplete}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Tasks;
