import { Link } from "react-router-dom";
import "./Employe.css";

export default function Employe({ name, image }) {
	return (
		<div className='emp'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='name'>
				<Link to={`/${name}`}>
					<h3>{name}</h3>
				</Link>
			</div>
		</div>
	);
}
