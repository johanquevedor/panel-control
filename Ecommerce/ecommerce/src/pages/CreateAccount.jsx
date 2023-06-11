import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import createaccount from '../assets/createaccount.png';
import FloatingButton from '../components/FloatingButton';

function CreateAccount() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      const newData = {
        name,
        lastName,
        username,
        password,
      };

      // Obtener los datos existentes del almacenamiento local
      const existingData = JSON.parse(localStorage.getItem('data')) || [];

      // Agregar los nuevos datos al arreglo existente
      existingData.push(newData);

      // Actualizar los datos en el almacenamiento local
      localStorage.setItem('data', JSON.stringify(existingData));
      
    
      alert('Your account has been created');
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert('An error occurred while creating your account. Please try again.');
    }
  };

  return (
    <div className="create-account-page">
       <img src={createaccount} className="createaccounticon" alt="createaccounticon" />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button-cartpage" onClick={handleCreateAccount}>Create Account</button>
      <div>Already have an account?</div>
      <button className="button-cartpage2" onClick={() => navigate('/login')}>Login</button>
      <FloatingButton />
    </div>
  );
}

export default CreateAccount;