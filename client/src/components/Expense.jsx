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
            <div className="ml-auto  pr-4">
               <h3
                  className={
                     exp.amount > 0 && exp.cat === "Salary"
                        ? "text-lime-400"
                        : "text-rose-400"
                  }
               >
                  {exp.amount > -1 && exp.cat !== "Salary"
                     ? -exp.amount
                     : exp.amount}{" "}
                  EUR
               </h3>
            </div>
         </li>
      </div>
   );
};
