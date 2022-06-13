import { BrowserRouter,Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Carrinho from "../pages/Carrinho";
import Error from "../pages/Error";
export default function Routes(){
  return(
   <BrowserRouter>
   <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage}  />
      <Route exact path="/carrinho" component={Carrinho}/>
      <Route exact path="/error" component={Error}/>
    </Switch>
   
   </BrowserRouter>
  )
}