import { useDispatch, useSelector } from "react-redux";
import loadingIcon from '../assets/Spinner-1s-200px.gif';
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../redux/thunk";
import { deleteUser } from "../redux/usersSlice";
import { useNavigate } from "react-router-dom";

const Users = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { usersList, loading, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchDataAsyncAction())
    }, [])

  useEffect(() => {
    if(error) {
      navigate("/error");
    }
  }, [error])

    return (
        <div>
            <h2>Users</h2>
            {loading && <img src={loadingIcon} alt="Loading" width="250px" height="250px" />}
            {usersList.length > 0 &&
                <ul>
                    {usersList.map((user, index) => 
                        <li key={index}>{user.name}
                            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        </li>

                    )}
                </ul>
            }
        </div>
    );
};

export default Users;
