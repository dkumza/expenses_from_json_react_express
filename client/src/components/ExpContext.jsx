import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ExpContext = createContext();

const BASE_URL = "http://localhost:3003/api/exp";

export const ExpProvider = ({ children }) => {
   const [expenses, setExpenses] = useState(null);
   const [cat, setCat] = useState("Food");
   const [amount, setAmount] = useState(0);
   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");

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

   const submitHandler = (e) => {
      e.preventDefault();

      const newExp = {
         cat,
         amount,
         title,
         date,
      };
      axios
         .post(BASE_URL, newExp)
         .then((res) => {
            if (res.status === 201) {
               console.log(res.data);
               setExpenses(res.data);
               setCat("");
               setAmount("");
               setTitle("");
            }
         })
         .catch((err) => {
            console.warn("ERROR: ", err);
         });
   };

   return (
      <ExpContext.Provider
         value={{
            submitHandler,
            expenses,
            setExpenses,
            cat,
            setCat,
            amount,
            setAmount,
            title,
            setTitle,
            date,
            setDate,
         }}
      >
         {children}
      </ExpContext.Provider>
   );
};
