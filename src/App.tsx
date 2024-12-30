import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
