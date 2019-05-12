import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import PracticeEditor from "./PracticeEditor/PracticeEditor";

function AppRouter() {
    return (
        <Switch>
            <Route exact path="*" exact component={PracticeEditor} />
        </Switch>);
}

export default AppRouter;