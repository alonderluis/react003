import logo from './logo.svg';
import './App.css';
//import C01componente from './components/C01componente';
import AppForm from './components/AppForm';

 
function App() {
  return (
  <div style={{background:"yellow", width:"350px" , padding:"10px",}}>
    <h1>App.js</h1>
    <AppForm></AppForm>
    <i class="large material-icons">insert_chart</i>
    <p>1. Juan Manuel 23 Masculino ----X----A </p>
    <p>1. Rosa Maria  25 Femenino  ----X----A </p>
    <p>1. Luis Miguel 22 Masculino ----X----A </p>
    </div>
  );
}

export default App;
