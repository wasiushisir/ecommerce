
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut/CheckOut';
import Product from './Product/Product';
import ThankYou from './Thanyou/ThankYou';
export const ThemeContext = createContext();

function App() {
  const [checkOut,setCheckOut]=useState([])
  const selectedProduct=(product,quantity)=>{
    console.log(product,quantity);
    const pro={...product,quantity}
    console.log(pro);
   

    const newProduct=[...checkOut,pro]
    console.log(newProduct);
    setCheckOut(newProduct)
    console.log(checkOut);

  
}


const handleIncrement=(id)=>{

  setCheckOut(checkOut=>
    checkOut.map((item)=>
    id===item._id?{...item,quantity:+(item.quantity)+1}:item
    )
    );




}
const handleDecrement=(id)=>{

  setCheckOut(checkOut=>
    checkOut.map((item)=>
    id===item._id?{...item,quantity:+(item.quantity)-1}:item
    )
    );




}










  return (
    <div>
      {/* <Product></Product> */}
      
      
      <Routes>
     
        <Route path='/' element={ <ThemeContext.Provider value={selectedProduct}><Product></Product></ThemeContext.Provider>}></Route>
      
        
        <Route path='/checkout'element={<CheckOut checkOut={checkOut} handleIncrement={handleIncrement} handleDecrement={handleDecrement} ></CheckOut>}></Route>
        <Route path='/proceed' element={<ThankYou></ThankYou>}></Route>

      </Routes>
     
    
    </div>
  );
}

export default App;
