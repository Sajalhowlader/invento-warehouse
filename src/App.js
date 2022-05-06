import './App.css';
import './Pages/AllCss/AllCss.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import AllItems from './Pages/AllItems/AllItems';
import SingIn from './Pages/User/SingIn/SingIn';
import SingUp from './Pages/User/SingUp/SingUp';
import Banner from './Pages/Home/Banner/Banner';



function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='allItems' element={<AllItems />} />
        <Route path='singIn' element={<SingIn />} />
        <Route path='singUp' element={<SingUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
