import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {AnyAction} from "redux";


// export const useTypedDispatch = () => useDispatch<AppDispatch>()
// export const useTypedDispatch: any = useDispatch

// initial
// export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedDispatch: () => AppDispatch = useDispatch