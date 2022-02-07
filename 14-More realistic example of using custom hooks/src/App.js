import React, { useEffect, useState } from "react";

import useFetchData from "./hooks/use-fetch-data";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformData = function (data) {
    const loadedTasks = [];

    for (const taskKey in data)
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });

    setTasks(loadedTasks);
  };

  const { error, isLoading, sendRequest: fetchTasks } = useFetchData();

  useEffect(() => {
    fetchTasks(
      {
        url: "https://strong-jetty-327511-default-rtdb.firebaseio.com/tasks.json",
      },
      transformData
    );
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
