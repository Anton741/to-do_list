import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask  from './components/add_task';



function App() {
  
  const [tasks, setTasks] = useState([])
  const [addForm, setAddForm] = useState(false)


  useEffect(() => {
    const date = JSON.parse(localStorage.getItem('myTasks'))
    if (date){
      setTasks(date);
    }
  }, []);

useEffect(() => {
  localStorage.setItem('myTasks', JSON.stringify(tasks));
},[tasks])


  const delTask = (task_id) => {
    return (setTasks(tasks.filter((task) => task._id != task_id)))
  }

  const taskComplited = (task_id) => {
    setTasks(tasks.map(task => {
      if (task._id === task_id){ 
        if (task.done === true) {
          task.done = false
        }else{
          task.done = true}
      }
      return task
    }))
  }

  const activateAddForm = () => {
    return setAddForm(true)
  }

  const disableAddForm = () => {
    return setAddForm(false)
  }

  const updateDateBase = () => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }

  const addTask = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim() != ''){
      const new_task = {
        _id:Date.now(),
        title: e.target[0].value,
        done: false
      };
      tasks.push(new_task)
      updateDateBase(new_task)
    }
    disableAddForm()
  }

  return (
    <div className="container">
        <Header></Header>
        <div className="main__content">
          <Tasks
            mytasks={tasks}
            onDelete={delTask}
            onComplited={taskComplited}
          ></Tasks>

          <AddTask
            onAddTask={activateAddForm}
            statusAddForm={addForm}
            addTask={addTask}
            onCancel={disableAddForm}
          ></AddTask>
        </div>
    </div>
  );
  
}

export default App;
