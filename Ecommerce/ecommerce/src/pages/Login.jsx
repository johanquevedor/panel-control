import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import decorationhome from '../assets/decorationhome.png';
import login from '../assets/login.png';
import FloatingButton from '../components/FloatingButton';



function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
   
   
    // Verificar si los campos de usuario y contraseña están vacíos
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter username and password');
      return;
    }
   
   
    // Obtener los datos almacenados en el localStorage
    const storedData = JSON.parse(localStorage.getItem('data')) || [];

    // Buscar el usuario correspondiente en los datos almacenados
    const storedUser = storedData.find((user) => user.username === username);

    // Validar los datos ingresados con los datos almacenados
    if (storedUser && storedUser.password === password) {
      // Inicio de sesión exitoso, redirigir al usuario a la página de inicio
      navigate('/');
    } else {
      // Credenciales inválidas, mostrar el mensaje de error
      setError('Incorrect username or password');
    }
  };

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };



  return (
    <div className="LoginMain">
      <div className="decorationhome">
        <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" />
      </div>

      <div className="login-card">
        <div className="loginicon">
          <img src={login} className="loginicon" alt="login" />
        </div>

        <input
          type="text"
          placeholder="Username"
          className="username-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="resetpassword">
          <button className="resetpassword">
            <a href="/resetpassword">Forgot Password?</a>
          </button>
        </div>

        <button className="normal-signin" onClick={handleLogin}>
        Login
      </button>

      
      {error && <div className="error-message">{error}</div>}

        <div className="Instruction-text-dhaa">Don't have an Account?</div>

        <button className="create-account" onClick={handleCreateAccount}>
          Create Account
        </button>

        <FloatingButton />
      </div>

      <div className="decorationhome">
        <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" />


      </div>

    </div>
  );
}

export default Login;

