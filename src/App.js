import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./components/Gallery";
import { Redirect, Route, Switch } from "react-router-dom";
import Imagedetails from "./components/Imagedetails";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/image-search" />
        </Route>
        <Route exact path="/image-search" component={Gallery} />
        <Route exact path="/image-search/:id" component={Imagedetails} />
        <Route>Error</Route>
      </Switch>
    </>
  );
}

export default App;
