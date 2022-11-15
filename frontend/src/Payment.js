import Store from './Store';
import { useState } from "react";
function Payment(){
    const [page, setpage] = useState("Payment");
    function myfunction(a){
      setpage(a)
    }
    return(
        <div> 
            {page=="Payment"?(
            <div>
            <h1>Payment gateway</h1>
            <button type="button"onClick={()=>myfunction("Store")} >Upi(Phonepay,Gpay,Paytm,and Razorpay integration)</button><br></br>
            <button type="button" > Bank account setup</button>
            </div>
            ):null}
            {page=="Store"?<Store/> : null}
        </div>

    );
}
export default Payment;