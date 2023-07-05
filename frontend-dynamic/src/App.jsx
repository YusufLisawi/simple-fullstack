import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./header/Header";
import ListEmploye from "./employe/ListEmploye";
import AddEmploye from "./employe/AddEmploye";
import DetailEmploye from "./employe/DetailEmploye";

function App() {
	return (
		<>
			<Router>
			<Header />
				<Routes>
					<Route path='/' element={<ListEmploye />} />
					<Route path='/add' element={<AddEmploye />} />
					<Route path='/:nom' element={<DetailEmploye />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
