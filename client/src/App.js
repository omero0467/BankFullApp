import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from "./components/NavBar";
import MainFooter from "./components/MainFooter";
import Account from "./components/pages/Account";
import CreateUser from "./components/pages/CreateUser";

function App() {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/users" element={<CreateUser />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
         <MainFooter />
      </>
   );
}

export default App;
