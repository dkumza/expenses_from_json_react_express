import { useContext } from "react";
import { ExpContext } from "./ExpContext";

export const Expense = ({ exp }) => {
   const { handleEdit } = useContext(ExpContext);
   return (
      <div
         onClick={() => handleEdit(exp.id)}
         className="exp-wrap flex gap-2 py-2 px-2 border justify-between items-center rounded-md border-sky-200 shadow bg-white hover:cursor-pointer hover:bg-yellow-50"
      >
         <div className="left-wrap flex gap-2 items-center w-full">
            <div className="border-r pr-2 py-2 w-20  text-center font-semibold">
               {exp.cat}
            </div>
            <div className="mid-wrap flex md:gap-10 w-full items-center justify-between">
               <h1 className="px-4">{exp.title}</h1>
               <p className="text-end text-xs">{exp.date}</p>
            </div>
         </div>

         <div className="right-wrap flex items-center justify-center">
            <h1 className=" text-end pr-2 min-w-28">{exp.amount} EUR</h1>
            {/* <div className="btn-wrap pl-2 border-l h-10 flex justify-center items-center gap-1 ">
               <button className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 text-center">
                  Edit
               </button>
               <button className="text-rose-400 hover:text-white border border-rose-400 hover:bg-rose-500 focus:ring-1 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-1 text-center">
                  Del
               </button>
            </div> */}
         </div>
      </div>
   );
};
