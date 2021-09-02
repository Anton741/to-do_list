const AddTask = (props) => {
  return ( 
    <>
      {props.statusAddForm && (
        <form className="task__add-active" onSubmit = {props.addTask}>
          <input className = "task__input" type="text" placeholder = "Текст задачи" />
          <div className="task__butns">
            <input type = "submit" className="task__btn add__btn" value = "Добавить задачу"></input>
            <button className="task__btn cancel__btn" onClick = {props.onCancel}>Отмена</button>
          </div>
        </form>)}
      {props.statusAddForm || (
      <div className="task__add" onClick = {props.onAddTask}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 8H15" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      <p className = "add-task__title">Новая задача</p>
      </div>
      )}
    </>
);
} 
export default AddTask;