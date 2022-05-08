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
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import MyOrders from './Pages/MyOrders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        <Route path='addItems' element={
          <Protected>
            <AddItems />
          </Protected>
        } />
        <Route path='myOrders' element={
          <Protected>
            <MyOrders />
          </Protected>
        } />
        <Route path='blogs' element={<Blogs />} />
        <Route path='singUp' element={<SingUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
