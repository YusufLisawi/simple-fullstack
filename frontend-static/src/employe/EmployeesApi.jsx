import { useEffect, useState } from "react";
import axios from "axios";

const EmployeesApi = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		fetchEmployees();
	}, []);

	const fetchEmployees = async () => {
		try {
			const response = await axios.get(
				"http://www.ofppt.ma/api/employes"
			);
			setEmployees(response.data);
		} catch (error) {
			console.error("Error fetching employees:", error);
		}
	};

	return (
		<div>
			<h2>Employees</h2>
			<table>
				<thead>
					<tr>
						<th>nom</th>
						<th>prenom</th>
						<th>fonction</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => (
						<tr key={employee.nom}>
							<td>{employee.nom}</td>
							<td>{employee.prenom}</td>
							<td>{employee.fonction}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeesApi;
