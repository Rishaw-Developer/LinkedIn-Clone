import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import {useStateValue} from "./StateProvider"

function App() {
  
  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      if (authUser){

        dispatch({
          type: "SET_USER",
          user: authuser
        })
      } else{
        
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
