import { useContext } from "react";
import { ExpContext } from "./ExpContext";
import { Expense } from "./Expense";

export const Main = () => {
   const { expenses } = useContext(ExpContext);

   return (
      <div className="border md:py-8 md:px-12 px-2 py-4 flex flex-col gap-2">
         {expenses && expenses.map((exp) => <Expense key={exp.id} exp={exp} />)}
         {!expenses && <p>No data</p>}
      </div>
   );
};
