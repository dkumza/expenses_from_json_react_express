import { useContext } from "react";
import { ExpContext } from "./ExpContext";

export const Balance = () => {
   const { balance } = useContext(ExpContext);

   return <div className="border w-full">{balance}</div>;
};
