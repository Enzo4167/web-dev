import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/Font-Awesome-master/Font-Awesome-master/css/all.min.css';
import Build from './components/a7/Build'
import Practice from "./components/a7/Practice";
import HomeScreen from "./components/a7/Build/HomeScreen/index";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
                <Route path="/a7/twitter/home" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a7/twitter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>
            </div>
        </BrowserRouter>

    );
}

export default App;
