import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailEmploye() {
	const {nom} = useParams();
	const employes = useSelector(state => state.employes);
	const employe = employes.find(emp => emp.nom === nom);
	return (
		<div>
			<h1>{employe.nom} {employe.prenom}</h1>
			<img src={employe.image} alt={employe.nom} />
			<p>{employe.fonction}</p>
		</div>
	)
}