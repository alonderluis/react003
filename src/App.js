//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import AppForm from './components/AppForm';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase/firebase';

function App() {
  ///////// READ - Lectura - fnRead ////////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColecionConQuery = query(collection(db, "persona"));
    const unsubscribe = onSnapshot(xColecionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((docV)=>{
        xDoc.push({id:docV.id, ...docV.data()});
        //console({id:doc.id, ...doc.data()});
      });
      setDocBD(xDoc);
    });
  }
  fnRead();
  console.log(docBD);
  ///////// DELETE - Eliminar - fnDelete ///////
  const [idActual, setIdActual] = useState("");
  const fnDelete = (xId) => {
  }
  
  return (
    <div style={{background:"yellow", width:"350px", 
     padding:"10px"}}>
      <AppForm {...{idActual}} />
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino ---- x -  A</p>
      <p>2. Rosa Maria  25 Femenino  ---- x -  A</p>
      <p>3. Luis Miguel 40 Masculino ---- x -  A</p>
    </div>
  );
}

export default App;

