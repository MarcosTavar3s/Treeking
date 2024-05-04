import './App.css';
import Home from './pages/Home';
import Corrida from './pages/Corrida';
import Cadastro from './pages/Cadastro';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>

      <Routes>
        <Route path="/corrida" element={<Corrida />}/>
      </Routes>

      <Routes>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    
    </Router>
    
    
  );
}

export default App;
