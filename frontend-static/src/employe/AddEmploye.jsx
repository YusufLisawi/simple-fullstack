import { useDispatch } from "react-redux";
import { addEmploye } from "../redux/employeSlice";
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
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addEmploye(employe));
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
