import { useContext } from "react";
import { ExpContext } from "./ExpContext";
import { Expense } from "./Expense";

export const Main = () => {
   const { expenses } = useContext(ExpContext);

   return (
      <div className="flex flex-col justify-center md:px-8 px-2">
         <h1 className="font-semibold py-4">Recent Transactions</h1>
         <div className=" flex flex-col gap-2 ">
            {expenses &&
               expenses.map((exp) => <Expense key={exp.id} exp={exp} />)}
            {!expenses && <p>No data. Press "New" to add some</p>}
         </div>
      </div>
   );
};
