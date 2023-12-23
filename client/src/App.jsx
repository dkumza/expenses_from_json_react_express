import "./App.css";
import { AddNewButton } from "./components/AddNewButton";
import { ExpProvider } from "./components/ExpContext";
import { Head } from "./components/Head";
import { Main } from "./components/Main";
import { New } from "./components/New";

function App() {
   return (
      <ExpProvider>
         <div className="main-wrap container mx-auto md:w-fit min-h-screen relative">
            <Head />
            <New />
            <Main />
            {/* <AddNewButton /> */}
         </div>
      </ExpProvider>
   );
}

export default App;
