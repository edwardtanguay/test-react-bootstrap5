import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>Welcome to this site.</p>
			<Button variant="success">Get Info</Button>
			<Button className="ms-2" variant="danger">Stop Process</Button>
		</div>
	)
}

export default App;