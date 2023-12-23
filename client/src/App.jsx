import "./App.css";
import { AddNewButton } from "./components/AddNewButton";
import { ExpProvider } from "./components/ExpContext";
import { Head } from "./components/Head";
import { Main } from "./components/Main";

function App() {
   return (
      <ExpProvider>
         <div className="main-wrap container mx-auto md:w-2/5 min-h-screen border relative">
            <Head />
            <Main />
            <AddNewButton />
         </div>
      </ExpProvider>
   );
}

export default App;
