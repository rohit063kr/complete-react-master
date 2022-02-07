import useFetchData from "../../hooks/use-fetch-data";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const createTask = function (task, data) {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: task };

    props.onAddTask(createdTask);
  };

  const { sendRequest, error, isLoading } = useFetchData();

  const enterTaskHandler = function (taskText) {
    sendRequest(
      {
        url: "https://strong-jetty-327511-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
