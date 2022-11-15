
import './App.css';
import Shop from './Shop';
import Product from './Product';
import Payment from './Payment';
import { useState } from "react";


function App() {
  const [page, setpage] = useState("Login");
  function myfunction(a){
    setpage(a)
  }
  return (

    <div> 
      {/* <a onClick={() => myfunction("Login")}> Login   </a>
      <a onClick={() => myfunction("Shop")} >Shop   </a>
      <a onClick={() => myfunction("Product")}>Product </a>
      <a onClick={() => myfunction("Payment")} >Payment </a> */}

       {page=="Login"?(
<div>
      <h1>Login/Sign up</h1>
      <input type="text"></input>

      <button type="button"onClick={()=> myfunction("Shop")}>Login/Signup with number</button><br></br>
      <button type="button">Login with gmail</button><br></br>
      <button type="button">Login with truecaller</button></div>) :null}
      {page=="Shop"?<Shop/> : null}
      {/* {page=="Product"?<Product/> : null} */}
      {/* {page=="Payment"?<Payment/> : null}
       */}
    </div>
    
  );
}

export default App;
