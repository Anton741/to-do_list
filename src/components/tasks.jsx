import Task from "./task";

const Tasks = ({mytasks, onDelete, onComplited}) => {
  const TasksHave = () => {
    if (mytasks){
      if (mytasks.length > 0) {
        return (
          mytasks.map((task) => {
            return <Task onDelete = {onDelete} onComplited = {onComplited} {...task}></Task>
          }))
      }else{
        return (<p className = "not-tasks__title">Задачи отсутствуют</p>)
      }
    }else{
        return <p className="not-tasks__title">Задачи отсутствуют</p>;
      }
  }

  return ( 
    TasksHave()
  );
}
export default Tasks;