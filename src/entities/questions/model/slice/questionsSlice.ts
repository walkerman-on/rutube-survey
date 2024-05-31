import { createSlice } from "@reduxjs/toolkit";
import {IQuestionsState} from "../../types/types"
import { fetchQuestions } from "entities/questions/api/fetchQuestions";

const initialState:IQuestionsState = {
    list: [],
    error: null,
    loading: false,
}

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchQuestions.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default questionsSlice.reducer