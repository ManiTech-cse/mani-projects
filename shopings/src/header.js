import React from 'react';
import {useState} from 'react';
import './App.css';
import {  Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';





const Header = () => {
  const [card, setCard] = useState(null);
const handleIncrement = () => {
  setCard((prevCard) => prevCard + 1); 
};
  return (
    <div className='main'>
    <header className="header">
      <div className="logo">
        <h1>P.M.R Shops</h1>
      </div><br></br><br></br>
    
      <nav className="nav m-2">
        <ul>
          <li><Link to="/" className='btn btn-primary '>Home</Link></li>
          <li><Link to="/Electronics" className='btn  btn-primary'>Electronics</Link>

          </li>
          <li><Link to="/Beautyproducts" className='btn  btn-primary'>Beauty Products</Link></li>
          <li><Link to="/Groceries" className='btn  btn-primary'>Groceries</Link></li>
        </ul>
     

      </nav>
      <div className="cart-icon">
      
          <p><img 
            src="https://up.yimg.com/ib/th?id=OIP.9UqfoFXUzuxVO1Hs56PQogHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" 
            alt="Shopping Cart" 
            width={25}
          /><sup style={{fontSize:'15px',color:'gray',fontWeight:600}}>{card}</sup></p>
          
         <sup className="cart-count" style={{ textDecoration: 'none' }}><button className='btn btn-danger cart' onClick={handleIncrement}>Add to cart</button></sup>
        <br></br><br></br>
 
      </div>
      <div className='btn btn-success signup'>
  
        signup</div>
    
    </header> 
   
    <Outlet/>
    </div>
         
    
  );

}


export default Header;

