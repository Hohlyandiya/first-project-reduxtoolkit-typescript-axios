import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { post } from "../components/models/post";

interface initialType {
    posts: post[];
    loading: boolean;
    error: string;
}

const initialState: initialType = {
    posts: [],
    loading: false,
    error: '',
}

export const toolkitSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        loading (state) {
            state.loading = true;
        },
        success(state, action: PayloadAction<post[]>) {
            state.posts = action.payload;
            state.loading = false;
            state.error = ''
        },
        error(state, action: PayloadAction<string>) {
            state.posts = [];
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default toolkitSlice.reducer