import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IAppState } from "../redux/types";


const useTypedSelector:TypedUseSelectorHook<IAppState> = useSelector

export default useTypedSelector