import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';

import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import LoginForm from '../login/LoginForm';
import Informacion from '../public/Informacion';
import Noticias from '../public/Noticias';
import RegisterForm from '../login/RegisterForm';
import Contacto from '../public/Contacto';

const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    
    const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }
  
    return (
      //style={{ background:"greenyellow", }}
      <div >
        <nav>
          <div id="login">
            <ul>
              <li><Link to="/nuevoregistro">Registrar</Link></li>
  
              <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li>
              <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              
            </ul>
          </div>
          
          <div id="menu">
            <ul>
              <li><Link to="/Dashboard">Inicio(Dashboard)</Link> </li>
              <li><Link to="/Informacion">Informacion(Home)</Link> </li>
              <li><Link to="/Noticias">Noticias(Home)</Link> </li>
              <li><Link to="/Contacto">Contacto(Home)</Link> </li>
              
            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/iniciarsesion" element={<LoginForm />} />
          <Route path="/nuevoregistro" element={<RegisterForm />} />

          <Route path="/Informacion" element={<Informacion/>} />
          <Route path="/Noticias" element={<Noticias/>} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          
        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
  /*


/*
const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
*/