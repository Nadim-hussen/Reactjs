import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Products from './Component/Products'; 
import Navbar from './Component/Navbar';
import Count from './Component/Count';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/Count" element={<Count />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
