import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Imagedetails from "./components/Imagedetails";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/main" component={Gallery} />
        <Route path="/main/:id" component={Imagedetails} />
      </Router>
    </>
  );
}

export default App;
