
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Csharp from './components/Csharp';
import Flutter from './components/Flutter';
import Java from './components/Java';
import JavaScript from './components/JavaScript';
import Php from './components/Php';
import Reac from './components/Reac';
import Salud from './components/Salud';
import Typescript from './components/Typescript';
import Pyton from './components/Pyton';
import Navigation from './components/Navigation';


function App() {
  return (
  <Router>
    
    <Routes>
    <Route path="/csharp" element={<Csharp className="image-size" />}/>
        <Route path="/flutter" element={<Flutter className="image-size" />}/>
        <Route path="/java" element={<Java className="image-size" />}/>
        <Route path="/javascript" element={<JavaScript className="image-size" />}/>
        <Route path="/php" element={<Php className="image-size" />}/>
        <Route path="/phyton" element={<Pyton className="image-size" />}/>
        <Route path="/react" element={<Reac className="image-size" />}/>
        <Route path="/salud" element={<Salud className="image-size" />}/>
        <Route path="/typescript" element={<Typescript className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
