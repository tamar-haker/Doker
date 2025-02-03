import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/todoSlice";

const FilterBar = () => {

  const dispatch = useDispatch();

  const filter = useSelector(state => state.todo.filter);
  const current = useSelector(state => state.todo.current);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div>
      <select
        id="filter"
        value={filter}
        onChange={handleChange}
        disabled={current}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default FilterBar;
