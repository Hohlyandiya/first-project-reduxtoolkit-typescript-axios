import { AppDispatch } from "./index";
import axios from 'axios';
import { post } from "../components/models/post";
import { toolkitSlice } from "./toolkitSlice";

export const fetch = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(toolkitSlice.actions.loading())
        const response = await axios.get<post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
        dispatch(toolkitSlice.actions.success(response.data))
    } catch (error: any) {
        dispatch(toolkitSlice.actions.error(error.message));
    }
}

