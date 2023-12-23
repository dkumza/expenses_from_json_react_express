export const Expense = ({ exp }) => {
   return (
      <div className="exp-wrap flex gap-2 py-2 px-4 border justify-between items-center rounded-md border-gray-200 shadow">
         <div className="left-wrap flex gap-2 items-center">
            <div className="border-r pr-2 py-2 w-20  text-center rounded">
               {exp.cat}
            </div>
            <div className="mid-wrap flex md:gap-10 w-full items-center justify-start">
               <h1 className="px-4">{exp.title}</h1>
               <p className="text-end">{exp.date}</p>
            </div>
         </div>

         <div className="right-wrap flex">
            <h1 className=" text-end ">{exp.amount} EUR</h1>
         </div>
      </div>
   );
};
