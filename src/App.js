import './App.css';
import './Pages/AllCss/AllCss.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import AllItems from './Pages/AllItems/AllItems';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='allItems' element={<AllItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
