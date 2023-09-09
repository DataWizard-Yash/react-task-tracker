import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete the Job Application",
      day: "Sept 5th at 12:00 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Remind Mehul kaka about referal",
      day: "Sept 5th at 2:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Work on Research",
      day: "Sept 6th at 1:00 PM",
      reminder: false,
    },
  ]);

  // Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/>
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
