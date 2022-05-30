import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions, IAppState } from "../redux/types";

const useTypedDispatch = () => {
  const dispatch:ThunkDispatch<IAppState, any, AppActions> = useDispatch()
  return dispatch
}

export default useTypedDispatch