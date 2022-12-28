import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Coach from './pages/coach';
import Navbar from './components/navbar';
import {Routes,Route} from "react-router-dom";
import { Login } from '@mui/icons-material';
//import { Login } from '@mui/icons-material';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
   </>
       
   
    
  );
};

export default App;
