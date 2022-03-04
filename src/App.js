import './assets/styles/App.css';
import './assets/styles/background.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "../src/components/introduction";
import HomePage from "../src/pages/homepage";

function App() {
  return (
    <Router>

      {/*<Route path="/*">
        <div className="navBarDiv">
          <NavBar/>
        </div>
  </Route>*/}

      <Switch>

        <Route path="/">
          <HomePage/>
          <Introduction/>
        </Route>

      </Switch>

    </Router>

    
  );
}

export default App;
