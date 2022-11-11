
import './App.css';
import Shop from './Shop';
import Product from './Product';
import Payment from './Payment';

function App() {
  function myfunction(){
    console.log("hello bristy");
  }
  return (

    <div> 

      <h1>Login/Sign up</h1>
      <input type="text"></input>

      <button type="button">Login/Signup with number</button><br></br>
      <button type="button">Login with gmail</button><br></br>
      <button type="button" onClick={myfunction}>Login with truecaller</button>
      <Shop />
      <Product></Product>
      <Payment></Payment>
    </div>
    
  );
}

export default App;
