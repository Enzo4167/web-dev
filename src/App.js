import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/font-awesome/css/font-awesome.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import HomeScreen from "./components/a6/Build/HomeScreen/index";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" >
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/twitter/home" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a6/twitter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>
            </div>
        </BrowserRouter>

    );
}

export default App;
