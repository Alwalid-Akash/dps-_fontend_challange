
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Myfooter from './components/Myfooter';
import Navbar from './components/Header';
import Read from './components/Read';
import DataDisplay from './components/DataDisplay';
function App() {
	return (
		<>
			<Navbar />
			<Read />
			<DataDisplay />
			<Myfooter />
		</>
	);
}

export default App;
