import logo from './logo.svg';
import './App.css';
//import C01componente from './components/C01componente';
//import P4variable from './components/P4variable';
import AppForm from './components/AppForm';
import { useState } from 'react';

function App() {
  ///// READ - LECTURA - fnRead //////
  const [docBD, setdocBD] = useState([]);
  const fnRead = () => {
  }
  ///// DELETE - ELIMINAR - fnDelete /////
  const [idActual, setIdActual] = useState("");
  const fnDelete =(xId) =>{

  }
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px", textAlign:"center"}}>
      <h1>App.js</h1>
      <AppForm {...{idActual}}></AppForm>
      <i class="large material-icons">insert_chart</i>

      <p>1. Frodoncio Famio   23 Masculino    ---- x - A</p>
      <p>2. Rosa Merino    25 Femenino     ---- x - A</p>
      <p>3. Max Orlando 22 Masculino    ---- x - A</p>
    </div>
  );
}

export default App;
