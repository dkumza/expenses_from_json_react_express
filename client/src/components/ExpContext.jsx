import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ExpContext = createContext();

const BASE_URL = "http://localhost:3003/api/exp";

export const ExpProvider = ({ children }) => {
   const [expenses, setExpenses] = useState(null);

   useEffect(() => {
      axios
         .get(BASE_URL)
         .then((res) => {
            console.log(res.data);
            setExpenses(res.data);
         })
         .catch((err) => {
            console.warn("ERROR: ", err);
         });
   }, []);

   return (
      <ExpContext.Provider value={{ expenses, setExpenses }}>
         {children}
      </ExpContext.Provider>
   );
};
