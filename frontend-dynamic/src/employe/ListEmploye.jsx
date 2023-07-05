import { useDispatch, useSelector } from "react-redux";
import Employe from "./Employe";
import "./Employe.css";
import { useEffect } from "react";
import { getEmployes } from "../redux/employeSlice";

export default function ListEmploye() {
	const employes = useSelector((state) => state.employes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEmployes());
	}, [dispatch]);
	return (
		<div className='grid'>
			{employes.map((emp) => (
				<Employe key={emp.image} image={emp.image} name={emp.nom} />
			))}
		</div>
	);
}
