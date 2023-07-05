import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	employes: [],
	loading: false,
	error: null,
};

export const getEmployes = createAsyncThunk(
	"employe/getEmployes",
	async () => {
		const response = await axios.get("/api/employee");
		return response.data;
	}
);

export const addEmployee = createAsyncThunk(
	"employe/addEmployee",
	async (data) => {
		const response = await axios.post("/api/employee", data);
		return response.data;
	}
);

const employeSlice = createSlice({
	name: "employe",
	initialState,
	reducers: {
		addEmploye : (state, action) => {
			state.employes.push(action.payload)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getEmployes.pending, (state) => {
			state.loading = true;
		})
		builder.addCase(getEmployes.fulfilled, (state, action) => {
			state.loading = false;
			state.employes = action.payload;
		})
		builder.addCase(getEmployes.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		})
		// add
		builder.addCase(addEmployee.pending, (state) => {
			state.loading = true;
		})
		builder.addCase(addEmployee.fulfilled, (state) => {
			state.loading = false;
		})
		builder.addCase(addEmployee.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		})
	}
});

export const { addEmploye } = employeSlice.actions;

export default employeSlice.reducer;
