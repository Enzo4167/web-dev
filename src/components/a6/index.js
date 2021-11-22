import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";
import Hello from "./HelloWorld"
const A6 = () => {
    return(
        <div>
            <Route path="/a6/hello" exact={true}>
                <Hello/>
            </Route>
            <Route path="/a6/practice" exact={true}>
                <Practice/>
            </Route>
            <Route path="/a6/twitter">
                <Build/>
            </Route>
        </div>
    )
}

export default A6;
