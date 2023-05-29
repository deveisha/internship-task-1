import { useState } from "react";
import { createContext } from "react";
export const FormContext = createContext();
const FormContextProvider = (props) => {
    const [formEdit, setformEdit] = useState(false); 

  
    return (
      <FormContext.Provider
        value={{ formEdit,setformEdit }}
      >
        {props.children}
      </FormContext.Provider>
    );
  };
  
  export default FormContextProvider;
