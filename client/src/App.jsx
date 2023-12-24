import "./App.css";
import { ExpProvider } from "./components/ExpContext";
import { Head } from "./components/Head";
import { Main } from "./components/Main";
import { New } from "./components/New";

function App() {
   return (
      <ExpProvider>
         <div className="main-wrap container mx-auto  min-h-screen relative md:min-w-[720px] flex flex-col items-center">
            <Head />
            <New />
            <Main />
         </div>
      </ExpProvider>
   );
}

export default App;
