import './App.css';
import './Pages/AllCss/AllCss.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import AllItems from './Pages/AllItems/AllItems';
import SingIn from './Pages/User/SingIn/SingIn';
import SingUp from './Pages/User/SingUp/SingUp';
import UpdateItems from './Pages/UpdateItems/UpdateItems';
import Protected from './Pages/Protected/Protected';




function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='allItems' element={<AllItems />} />
        <Route path='singIn' element={<SingIn />} />
        <Route path='/updateItems/:productId' element={
          <Protected>
            <UpdateItems />
          </Protected>
        } />
        <Route path='singUp' element={<SingUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
