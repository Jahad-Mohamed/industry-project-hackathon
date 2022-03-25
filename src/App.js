import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/HomePage/Home";
import CheckActiviy from "./components/CheckActiviy/CheckActiviy";
import EnterManual from "./components/EnterManual/EnterManual";
import StartTimer from "./components/StartTimer/StartTimer";
import ManualResults from "./components/ManualResults/ManualResults";
import TimerResults from "./components/TimerResults/TimerResults";

function App() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/options"
          render={(routerProps) => <CheckActiviy {...routerProps} />}
        />
        <Route
          path="/options/manual"
          render={(routerProps) => <EnterManual {...routerProps} />}
        />
        <Route
          path="/options/timer"
          render={(routerProps) => <StartTimer {...routerProps} />}
        />
        <Route
          exact
          path="/results"
          render={(routerProps) => <ManualResults {...routerProps} />}
        />
      </Switch>
    </>
  );
}

export default App;
