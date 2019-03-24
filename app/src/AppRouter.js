import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ChallengeContainer from "./Challenge/ChallengeContainer/ChallengeContainer";
import PracticeEditor from "./PracticeEditor/PracticeEditor";
import ChallengeDetail from './Challenge/ChallengeDetail/ChallengeDetail';
import CodeArenaFinding from './CodeArena/CodeArenaFinding/CodeArenaFinding';
import NoMatch from './NoMatch/NoMatch';
import CodeArenaBattleRing from './CodeArena/CodeArenaBattleRing/CodeArenaBattleRing';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" exact component={ChallengeContainer} />
            <Route exact path="/practice" component={PracticeEditor} />
            <Route exact path="/challenge/:type/:id" component={ChallengeDetail} />
            <Route exact path="/challenge/codearena/finding" component={CodeArenaFinding} />
            <Route exact path="/ring/:id" component={CodeArenaBattleRing} />
            <Route component={NoMatch} />
        </Switch>);
}

export default AppRouter;