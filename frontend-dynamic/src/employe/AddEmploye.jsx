import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeSlice";
import { useState } from "react";

export default function AddEmploye() {
	const dispatch = useDispatch();
	const [employe, setEmploye] = useState({
		image: "",
		nom: "",
		prenom: "",
		fonction: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmploye({ ...employe, [name]: value });
	};
	// const addEmployee = async (data) => {
	// 	const response = await axios.post("/api/employee", data);
	// 	return response.data;
	// }
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addEmployee(employe));
		setEmploye({
			image: "",
			nom: "",
			prenom: "",
			fonction: "",
		});
	};
	return (
		<div>
			<h1>Add Employe</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='image'
					name='image'
					value={employe.image}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='nom'
					name='nom'
					value={employe.nom}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='prenom'
					name='prenom'
					value={employe.prenom}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='fonction'
					name='fonction'
					value={employe.fonction}
					onChange={handleChange}
				/>
				<input type='submit' value='Ajouter' />
			</form>
		</div>
	);
}
