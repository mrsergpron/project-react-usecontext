import { useContext } from "react";
import userContext from "../userContext";
import "../styles.css";

const TodoList = () => {
  const value = useContext(userContext);

  return (
    <ul>
      {value.task.map((i) => (
        <li key={i.id}>
          <div>{i.data}</div>
          <div>{i.title}</div>
          <div>
            <button onClick={() => value.delTask(i.id)}>Del</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
