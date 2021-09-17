
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./views/Home";
import MovieDetail from "./views/MovieDetail";
import Register from "./views/Register";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={MovieDetail} />
        <Route path="/dangky" exact component={Register} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
