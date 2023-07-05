import { useSelector } from "react-redux";
import Employe from "./Employe";
import "./Employe.css";

export default function ListEmploye() {
	const employes = useSelector(state => state.employes);
	return (
		<div className='grid'>
			{employes.map((emp) => (
				<Employe key={emp.image} image={emp.image} name={emp.nom} />
			))}
		</div>
	);
}
