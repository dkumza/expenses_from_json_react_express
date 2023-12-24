import "./App.css";
import { AddNewButton } from "./components/AddNewButton";
import { ExpProvider } from "./components/ExpContext";
import { Head } from "./components/Head";
import { Main } from "./components/Main";
import { New } from "./components/New";

function App() {
   return (
      <ExpProvider>
         <div className="main-wrap container mx-auto  min-h-screen relative md:max-w-[720px]">
            <Head />
            <New />
            <Main />
            {/* <AddNewButton /> */}
         </div>
      </ExpProvider>
   );
}

export default App;
