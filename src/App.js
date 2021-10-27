
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { fetchMe } from "./redux/actions/ManagerUserAction";
// import AuthLayout from "./templates/AuthTemplate";
// import CheckoutTemplate from "./templates/CheckoutTemplate";
// import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { theme, TOKEN } from "./util/settings/config";
import LazyLoading from "./components/LazyLoading";
import Loading from "./components/Loading";
import { MuiThemeProvider } from "@material-ui/core";
// import CheckOut from "./views/Checkout/index.jsx";

// import Home from "./views/Home";
// import Login from "./views/Login";
// import MovieDetail from "./views/MovieDetail";
// import Register from "./views/Register";
const AuthLayout = lazy(() => import("./templates/AuthTemplate"))

const CheckoutTemplate = lazy(() => import("./templates/CheckoutTemplate"))
const HomeTemplate = lazy(() => import("./templates/HomeTemplate/HomeTemplate"))
const CheckOut = lazy(() => import("./views/Checkout/index.jsx"))
const Home = lazy(() => import("./views/Home"))
const Login = lazy(() => import("./views/Login"))
const MovieDetail = lazy(() => import("./views/MovieDetail"))
const Register = lazy(() => import("./views/Register"))


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      dispatch(fetchMe())
    }

  }, [dispatch])
 
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
      <Loading />
      <Suspense fallback={<LazyLoading />}>

        <Switch>
          <Route exact path={["/", "/detail/:id", "/taikhoan"]}>

            <HomeTemplate path="/home" exact Component={Home} />
            <HomeTemplate path="/" exact Component={Home} />
            <HomeTemplate path="/detail/:id" exact Component={MovieDetail} />
          </Route>

          <AuthLayout path="/dangky" exact Component={Register} />
          <AuthLayout path="/dangnhap" exact Component={Login} />

          <CheckoutTemplate path="/datve/:id" exact Component={CheckOut} />


        </Switch>
      </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
