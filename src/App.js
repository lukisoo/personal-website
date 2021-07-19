import './App.css';
import './background.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../src/components/navbar";
import Introduction from "../src/components/introduction";

function App() {
  return (
    <Router>

      <Route path="/*">
        <div className="navBarDiv">
          <NavBar/>
        </div>
      </Route>

      <Switch>

        <Route path="/">
          <Introduction/>
        </Route>

      </Switch>

    </Router>

    
  );
}

export default App;
