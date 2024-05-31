import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api";
import { IQuestion } from "../types/types";

export const fetchQuestions = createAsyncThunk<IQuestion[], void, {rejectValue: string}>(
	"fetchQuestions",
	async (_, { rejectWithValue }) => {
		try {
      const response = await $api.get<IQuestion[]>(`/questions`);

	        if (!response.data) {
        throw new Error();
      }
	  return response.data

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)