import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChallengeContainer from "./ChallengeContainer/ChallengeContainer";
import PracticeEditor from "./PracticeEditor/PracticeEditor";
import ChallengeDetail from './ChallengeDetail/ChallengeDetail';

function AppRouter (){
    return (<Router>
        <Route path="/" exact component={ChallengeContainer} />
        <Route path="/practice" component={PracticeEditor} />
        <Route path="/challenge/:id" component={ChallengeDetail} />
        <Route path="/challenge/codearena/finding" component={CodeArenaFinding} />


    </Router>);
}

export default AppRouter;