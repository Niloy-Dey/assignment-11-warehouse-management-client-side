import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import SignUp from './Component/SignUp/SignUp';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import AllProduct from './Component/AllProduct/AllProduct';
import AddProduct from './Component/AddProduct/AddProduct';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import Blog from './Component/Blog/Blog';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Inventory from './Component/Inventory/Inventory';

function App() {
 
  return (
    <div>
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/signUp'  element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/addProduct' element={
                <RequireAuth>
                  <AddProduct></AddProduct>
                </RequireAuth>
            }></Route>
            <Route path='allProduct' element={
                <RequireAuth>
                  <AllProduct></AllProduct>
                </RequireAuth>
            } ></Route>
            <Route path='Blog' element={<Blog></Blog>}></Route>
            <Route path='manageProduct' element={
               <ManageProduct></ManageProduct>
            }></Route>
            <Route path='*'element={ <NotFound></NotFound>}></Route>

            <Route path='/inventory/:productId' element={<Inventory></Inventory> }></Route>
      </Routes>
      
      <Footer></Footer>
    </div>  
)
}
export default App;


