import './App.css';
import './vendors/bootstrap-5.1.2-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';

import {BrowserRouter, Link, Route} from "react-router-dom";

import A6Build from "./components/a6";
import A7Build from "./components/a7";
import A8Build from "./a8/Build";
import A8 from "./a8";
import A7 from "./components/a7"
import A6 from "./components/a6"
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Link to="/a6/practice">A6 </Link>
                <Link to="/a7/practice">A7 </Link>
                <Link to="/a8/practice">A8 </Link>

                <Route path="/a6/practice">
                    <A6/>
                </Route>
                <Route path="/a7/practice">
                    <A7/>
                </Route>
                <Route path="/a8/practice">
                    <A8/>
                </Route>

                <Route path="/a6/twitter">
                    <A6Build/>
                </Route>
                <Route path="/a7/twitter">
                    <A7Build/>
                </Route>
                <Route path="/a8/twitter">
                    <A8Build/>
                </Route>

            </div>
        </BrowserRouter>

    );
}

export default App;
