import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
	return <nav>
		<div>
			<Link to="/">List des employes</Link>
			<Link to="/add">Ajouter un employe</Link>
		</div>
	</nav>;
}
