import { useContext } from "react";
import { ExpContext } from "./ExpContext";

export const Balance = () => {
   const { balance, positives, negatives } = useContext(ExpContext);

   return (
      <div className=" flex flex-col gap-2 lg:rounded w-full mt-4">
         <div className="balance-wrap text-left leading-3 mx-3">
            <h1 className="balance-big text-3xl">{balance} EUR</h1>
            <p className="small-txt">Balance</p>
         </div>
         <div className="flex place-content-between gap-2 px-2">
            <div className="bg-white flex flex-1 flex-col shadow shadow-gray-300/50 rounded-lg p-4 place-content-between text-left gap-4 hover:bg-slate-50  hover:bg-gradient-to-r from-gray-50  to-white text-lime-400">
               <div className="euros">
                  <h2 className="tot-income text-2xl">
                     {positives ? positives : 0} EUR
                  </h2>
               </div>
               <div className="income-small">
                  <p className="small-txt  text-lime-400">Total income</p>
               </div>
            </div>
            <div className="flex flex-1 flex-col shadow shadow-gray-300/50 rounded-lg p-4 place-content-between text-left gap-4 hover:bg-slate-50  hover:bg-gradient-to-r from-gray-50  to-white text-rose-400">
               <div className="euros">
                  <h2 className="tot-spent text-2xl">
                     {negatives ? negatives : 0} EUR
                  </h2>
               </div>
               <div className="income-small">
                  <p className="small-txt text-rose-400">Total spent</p>
               </div>
            </div>
         </div>
      </div>
   );
};
