import { useContext } from "react";
import { ExpContext } from "./ExpContext";

export const Balance = () => {
   const { expenses, balance, setBalance } = useContext(ExpContext);
   if (!expenses) return;
   console.log(expenses.map((exp) => exp.amount));
   //    const sum = expenses.reduce((accumulator, object) => {
   //       return accumulator + object.amount;
   //    }, 0);
   //    setBalance(sum);

   //    expenses && expenses.map((exp) => () => setBalance(balance + exp.amount));

   return <div className="border w-full">{balance}</div>;
};
