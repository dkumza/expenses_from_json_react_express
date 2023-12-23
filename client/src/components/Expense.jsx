import { useContext } from "react";
import { ExpContext } from "./ExpContext";

const getIconClass = (category) => {
   switch (category) {
      case "Food":
         return "bi-lightning-charge";
      case "Health":
         return "bi-balloon-heart";
      case "House":
         return "bi-house-heart";
      default:
         return "bi-cash-stack";
   }
};

export const Expense = ({ exp }) => {
   const { handleEdit } = useContext(ExpContext);

   const iconClass = getIconClass(exp.cat);

   return (
      // <div
      //    onClick={() => handleEdit(exp.id)}
      //    className="exp-wrap flex gap-2 py-2 px-2 border justify-between items-center rounded-md border-sky-200 shadow bg-white hover:cursor-pointer hover:bg-yellow-50"
      // >
      <div className="" onClick={() => handleEdit(exp.id)}>
         <li className="flex items-center border border-gray-200 rounded shadow px-1 py-1 hover:bg-gradient-to-r from-white to-gray-50 shadow-gray-300/50 hover:cursor-pointer">
            <div className="flex justify-center items-center px-3 mr-4 border-r">
               <i className={`bi ${iconClass}`}></i>
            </div>
            <div className="category-item md:pr-8 pr-4">
               <h3 className="text-base">{exp.cat}</h3>
               <p className="text-xs font-normal text-gray-400">{exp.date}</p>
            </div>
            <div className="text-sm text-gray-400">{exp.title}</div>
            <div className="ml-auto text-lime-400 pr-4">
               <h3>{exp.amount} EUR</h3>
            </div>
            {/* <div className="border-l m-2 px-2 cursor-pointer">
               <i className="bi bi-x-lg del-btn ml-1"></i>
            </div> */}
         </li>
      </div>
   );
};
