import Payment from './Payment';
import { useState } from "react";


function Product(){
    const [page, setpage] = useState("Product");
    function myfunction(a){
      setpage(a)
    }

    return(
        <div> 
            {page=="Product"?(
                <div>
            <h1>Add Product</h1>
            <label> Product name</label>
            <input type="text"></input><br></br>
            <label>category</label>
            <input type="text>"></input><br></br>
            <label>price</label>
            <input type="text>"></input><br></br>
            <label>quantity</label>
            <input type="text>"></input><br></br>
            <label>discount</label>
            <input type="text>"></input><br></br>
            <button type="button"onClick={()=>myfunction("Payment")}>Submit </button>
            </div>
            ):null}
            {page=="Payment"?<Payment/> : null}
            
        </div>

    );
}
export default Product;