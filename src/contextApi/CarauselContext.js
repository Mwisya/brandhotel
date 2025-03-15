import {createContext, useContext} from "react";

export const CarauselContext = createContext();
export const CarauselProvider = ({children}) => {

    return(
      <CarauselContext.Provider value={{ }}>
            {children}
      </CarauselContext.Provider>
    )
}

export  const useCarauselContext = () => useContext(CarauselContext)