import { useState } from "react";
import { createContext } from "react";
export const ProductContext = createContext();
const ProductContextProvider = (props) => {
    const [productValue, setproductValue] = useState(null); 
    const[drawerOpen,setdrawerOpen] =useState(false) 
  

    const changeproductValue = (val) => {
      console.log(val)
      setproductValue(val);
    };
  
    return (
      <ProductContext.Provider
        value={{ productValue, changeproductValue,drawerOpen,setdrawerOpen }}
      >
        {props.children}
      </ProductContext.Provider>
    );
  };
  
  export default ProductContextProvider;