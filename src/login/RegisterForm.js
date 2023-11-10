import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext';
import { useNavigate } from 'react-router-dom';

// Para verificar que no registre con el mismo correo
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../conexion/firebase';

function RegisterForm() {

  const { register } = useAuth();             // Registra usuario
  
  const [email, setEmail] = useState('');       // Variables para correo
  const [password, setPassword] = useState(''); // Variable para password
  
  const navigate = useNavigate();               // Navegación

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      console.log("Se registro usuario...xxx");
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }

  return (
    <div>
      <h2>Registro de Nuevo Usuario</h2>

      <form className='card card-body' onSubmit={handleRegister}> 

      <button className='btn btn-primary btn-block'>
          Registrar Usuario 
        </button>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>account_circle</i>
          </div>
          <input className='form-control float-start' type="email"  placeholder='Edasuario...'  
            onChange={(e) => setEmail(e.target.value)} value={email}  />
        </div>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>lock_open</i>
          </div>
          <input className='form-control float-start' type='password' placeholder='Contra...'  
            onChange={(e) => setPassword(e.target.value)} value={password}  />
        </div>
        
        
        <button type="submit" className='btn btn-primary btn-block'>
        Registrarse
        </button>      </form>
    </div>
  );
}

export default RegisterForm;

/*
const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      console.log("Se registro usuario...xxx");
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }
*/