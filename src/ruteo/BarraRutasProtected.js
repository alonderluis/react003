import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

////////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';

////////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Fotos from '../protegido/sistemafile/Fotos';

////////////////////////7 PAG. PUBLICOS /////////////////
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';
import AppLista from '../protegido/sistemacrud/AppLista';
import ListaDeCarreras from '../protegido/sistemacrud/ListaDeCarreras';
import ListaDeDeportes from '../protegido/sistemacrud/ListaDeDeportes';
import ListaDeProfesores from '../protegido/sistemacrud/ListaEgresados';
import DocumentosPDF from '../protegido/sistemafile/DocumentosPDF';
import DocumentosWORD from '../protegido/sistemafile/DocumentosWORD';
import Videos from '../protegido/sistemafile/Videos';
import ListaEgresados from '../protegido/sistemacrud/ListaEgresados';

const BarraRutasProtected = () => {
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
      //style={{ background:"royalblue", padding:"10px" }}
      <div >
        <nav>
          <div id="login">
            <ul>
              <li><Link to="/nuevoregistro">Registrar</Link></li>
  
              <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li> 
  
            </ul>
          </div>
              
          <div id="menu">
            <ul>
              <li><Link to="/sistema-crud/Carreras">Carreras</Link> </li>
              <li><Link to="/sistema-crud/Deportes">Deportes</Link> </li>
              <li><Link to="/sistema-crud/ListaEgresados">Egresados</Link> </li>
              <li><Link to="/sistema-crud/applista">Alumnos(applista)</Link> </li>
                      
              <li><Link to="/sistema-file/fotos">Fotos</Link> </li>
              <li><Link to="/sistema-file/DocumentosPDF">Doc.PDF</Link> </li>
              <li><Link to="/sistema-file/Videos">Videos</Link> </li>
              <li><Link to="/sistema-file/DocumentosWORD">Doc.Word.</Link> </li>
            </ul>
          </div>
        </nav>
  
        <Routes>

          <Route path="/iniciarsesion" element={<LoginForm />} />
          <Route path="/nuevoregistro" element={<RegisterForm />} />

          
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="AppLista" element={<AppLista/>} />
            <Route path="Carreras" element={<ListaDeCarreras/>} />
            <Route path="Deportes" element={<ListaDeDeportes/>} />
            <Route path="ListaEgresados" element={<ListaEgresados/>} />
          </Route>
  
  
          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="fotos" element={<Fotos />} />
            <Route path="DocumentosPDF" element={<DocumentosPDF />} />
            <Route path="Videos" element={<Videos/>} />
            <Route path="DocumentosWORD" element={<DocumentosWORD />} />
          </Route>
  
        </Routes>        
      </div>
    )
}

export default BarraRutasProtected;

function MarcoParaSistemaCRUD() {
    return (
      //style={{background:"cornflowerblue", padding:"10px"}}
      <div >
        <h1>Marco sistema CRUD</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
  }
  
function MarcoParaSistemaFILE() {
    return (
      //style={{background:"slateblue", padding:"10px"}}
      <div >
        <h1>Marco Sistema FILES</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
}
  


  
  /*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              )}

              <li><Link to="/nuevoregistro">Registrar</Link></li>

              {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                ) : (
                null
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
  
