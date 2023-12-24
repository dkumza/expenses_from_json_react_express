import { useContext } from "react";
import { ExpContext } from "./ExpContext";
import { Expense } from "./Expense";

export const Main = () => {
   const { expenses } = useContext(ExpContext);

   return (
      <div className="flex flex-col justify-center p-2 items-center">
         <h1 className="font-semibold pb-1">Recent Transactions</h1>
         <div className="flex   flex-col   gap-3 overflow-auto   p-1 w-3/4">
            {expenses &&
               expenses.map((exp) => <Expense key={exp.id} exp={exp} />)}
            {!expenses && <p>No data. Press "New" to add some</p>}
         </div>
      </div>
   );
};
