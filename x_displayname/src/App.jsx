import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDisplayFullName = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('Please fill in both first name and last name.');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError('');
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <button onClick={handleDisplayFullName}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fullName && (
        <div>
          <h2>Full Name:{fullName}</h2>
        </div>
      )}
    </div>
  );
}

export default App
