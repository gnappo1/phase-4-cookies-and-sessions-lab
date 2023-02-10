import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

// implement context
// add some functions in there: login, signup, logout
// add some state
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/articles/:id">
          <Article />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
