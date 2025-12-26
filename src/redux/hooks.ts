import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = useSelector.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();