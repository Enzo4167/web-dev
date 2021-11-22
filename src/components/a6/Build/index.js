import React from "react"
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
const Build = () => {
    return (
        <div>
            <Route path={["/a6/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path={"/a6/twitter/explore"}
                   exact={true} component={ExploreScreen}/>
        </div>
    )
};
export default Build;