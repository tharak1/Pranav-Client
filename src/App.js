
import {BrowserRouter as Router , Routes , Route, Navigate} from "react-router-dom"
import { Home } from './pages/Home';
//import { Navbar } from './pages/Navbar';
import { About } from './pages/About';
import { Hww } from './pages/Hww';
import { Register } from './pages/Register'; 
import { Login } from './pages/Login';
import RecipePage from "./pages/RecipePage";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import Performance from "./pages/Performance";
import Info from "./pages/Info";

function App() {
  return (
    <div>
       
        <Router>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/hww' element={<Hww/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/recipePage/:id' element={<RecipePage />} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Navigate to="/dashboard/performance" replace />} />
            <Route path='/dashboard/performance' element={<Performance/>} />
            <Route path='/dashboard/info' element={<Info/>} />
          
          </Route>
        </Routes>
       </Router>
        
    </div>
   
  );
}

export default App;
