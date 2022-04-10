import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Home from './components/Home'

function App() {
  return (
      <Router>

      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>

      <Footer/>
      </Router>

  );
}

export default App;
