
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import axios from 'axios';
import Activation from './pages/Activation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/HomePage' ;
import Seller from './components/seller/Seller';
import ProductPage from './pages/ProductPage';
import BestSellingPage from './pages/BestSellingPage';
import EventsPage from './pages/EventsPage';
import FAQPage from './pages/FAQPage';
import ProductDetailsPage from './components/ProductsDetails/ProductDetailsPage';

axios.defaults.baseURL = "http://localhost:3001/api"
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/seller' element={<Seller />} ></Route>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/activation/:activation_token' element={<Activation />} />
          <Route path='/product/:name' element={<ProductDetailsPage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/best-Selling' element={<BestSellingPage />} />
          <Route path='events' element={<EventsPage />} />
          <Route path='faq' element={<FAQPage />}/>
          
        </Routes>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </BrowserRouter>
    </div>
  );
}

export default App;
