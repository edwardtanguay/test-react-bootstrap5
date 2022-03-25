import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Login } from './components/Login';

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Info Site</h1>
				<p>Welcome to this site.</p>
				<Button variant="success">Get Info</Button>
				<Button className="ms-2" variant="danger">Stop Process</Button>
				<Login />
			</Container>
		</div>
	)
}

export default App;