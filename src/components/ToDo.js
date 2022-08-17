import { useDispatch } from "react-redux";
import { remove } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(remove(id));
  };

  return (
    <li>
      {text}
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default ToDo;
