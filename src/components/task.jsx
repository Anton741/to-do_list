import './task.css'

const Task = (props) => {
  
  return (
    <div className="task">
      <div className="checkbox">
        <label className="checkbox__lable">
          <input className="checkbox__input" type="checkbox" checked = {props.done} />
          <span
            className="check__box"
            onClick={() => props.onComplited(props._id)}
          ></span>
          <span
            className={props.done ? 'task__done task__item' : ' task__item'}
          >
            {props.title}
          </span>
        </label>
      </div>
      <div className="task__del" onClick={() => props.onDelete(props._id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#E3E3E3"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </div>
    </div>
  );
}

export default Task;