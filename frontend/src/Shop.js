import './App.css';
import { useState } from "react";
import Product from './Product';

function Shop() {
  const [page, setpage] = useState("Shop");
  function myfunction(a){
    setpage(a)
  }
  return (

    <div> 
 {page=="Shop"?(
 <div>
      <h1>Shop Details</h1>
      <label>Store name </label>
      <input type="text"></input><br></br>
      <label>Business category </label>
      <input type="text"></input><br></br>
      <label>GST number </label>
      <input type="text"></input><br></br>
      <label>Location/Address </label>
      <input type="text"></input><br></br>
      <button type="button" onClick={()=>myfunction("Product")}>Submit</button>
      </div>
 ):null}
      {page=="Product"?<Product/> : null}
    </div>
    
  );
}

export default Shop;
