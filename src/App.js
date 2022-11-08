import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control placeholder="Firstname" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Select disabled>
          <option>Address</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Tick When Ready" disabled />
      </Form.Group>
    
    </div>
  );
}

export default App;
