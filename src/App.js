import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./components/Gallery";
import { Route, Switch } from "react-router-dom";
import Imagedetails from "./components/Imagedetails";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Gallery} />
        <Route exact path="/:id" component={Imagedetails} />
      </Switch>
    </>
  );
}

export default App;
