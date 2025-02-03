import { useDispatch, useSelector } from "react-redux";
import { addPoint, removePoint, resetPoints } from "../redux/pointsSlice";

const Points = () => {

    const dispatch = useDispatch();

    const pointsValue = useSelector(state => state.points.value);

    return (
        <div>
            <h3>User points:</h3>
            <p>{pointsValue}</p>
            <button onClick={() => dispatch(addPoint())}>Add point</button>
            <button onClick={() => dispatch(removePoint())}>Remove point</button>
            <button onClick={() => dispatch(resetPoints())}>Reset point</button>
        </div>
    );
};

export default Points;
