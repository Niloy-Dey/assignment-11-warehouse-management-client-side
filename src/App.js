import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import SignUp from './Component/SignUp/SignUp';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import AllProduct from './Component/AllProduct/AllProduct';

function App() {
 
  return (
    <div>
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/signUp'  element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/addProduct'></Route>
            <Route path='allProduct' element={<AllProduct></AllProduct>} ></Route>
            <Route path='Blog'></Route>
            <Route path='manageItem'></Route>
            <Route path='*'element={ <NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>  
)
}
export default App;


