import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employes : [
		{
			image : "http://www.lorempixel.com/100/100/people/1",
			nom : "Doe",
			prenom : "John",
			fonction : "CEO",
		}
	]
}

const employeSlice = createSlice({
	name : "employe",
	initialState,
	reducers : {
		addEmploye : (state, action) => {
			state.employes.push(action.payload)
		}
	}
})

export const { addEmploye } = employeSlice.actions;

export default employeSlice.reducer;