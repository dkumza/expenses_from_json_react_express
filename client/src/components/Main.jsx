import { useContext } from "react";
import { ExpContext } from "./ExpContext";
import { Expense } from "./Expense";

export const Main = () => {
   const { expenses } = useContext(ExpContext);

   return (
      <div className="flex flex-col justify-center p-2 items-center md:w-[560px] w-full">
         <h1 className="font-semibold pb-1 text-left w-full">
            Recent Transactions
         </h1>
         <div className="flex   flex-col   gap-3 overflow-auto   p-1 w-full">
            {expenses &&
               expenses.map((exp) => <Expense key={exp.id} exp={exp} />)}
            {!expenses && <p>No data. Press "New" to add some</p>}
         </div>
      </div>
   );
};
