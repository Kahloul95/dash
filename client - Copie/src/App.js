import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Signalement from "./pages/signalement/Signalement";
//import Signalement from "./pages/signalement/Signalement"
import Gestion from "./pages/gestion/Gestion";
import Avis from "./pages/avis/Avis";
import Concour from "./pages/concour/Concour";

import Useravis from "./pages/useravis/Useravis";


import AddAvis from "./pages/addAvis/AddAvis";
import Createmos from "./pages/createmos/Createmos";
import Login from "./pages/login/Login";
import Displyavis from "./pages/displyavis/Displyavis";
import News from "./pages/news/News";
import Newnews from "./pages/newnews/Newnews";
import Viewnews from './pages/viewnews/Viewnews'
import Updatenews from './pages/updatenews/Updatenews'
import { useSelector } from "react-redux";



function App() {
 //const admin = useSelector((state)=> state.admin.currentUser);
  return (
    <div>
      <Router>
        
          
            <Topbar/>
            <div className="container fix-container">
              <Sidebar/>
         <Switch>
         
            <Route exact path='/'>
            <Home />
            </Route>
            <Route exact path='/news'>
            <News/>
            </Route>
            <Route path='/users'>
            <UserList />
            </Route>
            <Route path='/user/:userId'>
            <User />
            </Route>
            <Route path='/newUser'>
            <NewUser/>
            </Route>
            <Route path='/createmos'>
            <Createmos/>
            </Route>
            <Route path='/newNews'>
            <Newnews/>
            </Route>
            <Route path='/avis/add'>
            <AddAvis/>
            </Route>
            <Route path='/products'>
            <ProductList />
            </Route>
            <Route path='/product/:productsId'>
            <Product />
            </Route>
            <Route path='/newproduct'>
            <NewProduct/>
            </Route>
            <Route path='/signalement'>
            <Signalement/>
            </Route>
            <Route path='/gestion'>
            <Gestion/>
            </Route>
            <Route path='/avis'>
            <Avis/>
            </Route>
            <Route path='/concour'>
            <Concour/>
            </Route>
            <Route path='/useravis'>
            <Useravis/>
            </Route>
            <Route path='/updatenews'>
            <Updatenews/>
            </Route>
            <Route path='/displyavis'>
            <Displyavis/>
            </Route>
            <Route path='/viewnews'>
            <Viewnews/>
            </Route>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
