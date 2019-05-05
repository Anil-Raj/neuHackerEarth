import React, { Component } from 'react';
class ScoreBoard extends Component {
    render() { 
        return (  <div className="date date-countdown">
        <div id="countdown-653854" className="countdown">
            <div className="smaller light caps weight-600">SCORE BOARD</div>
            <div id="days" className="inline-block align-left time-block">
                <div id="days-1" className="inline-block large weight-600 dark">{this.props.fights}</div>
                <div id="colon" className="inline-block large weight-600 dark less-margin-left less-margin-right">:</div>
                <div id="days-text" className="smallest light caps">Fights</div>
            </div>
            <div id="hours" className="inline-block align-left time-block">
                <div id="hours-1" className="inline-block large weight-600 dark">{this.props.wins}</div>
                <div id="colon" className="inline-block large weight-600 dark less-margin-left less-margin-right">:</div>
                <div id="hours-text" className="smallest light caps">Wins</div>
            </div>
            <div id="minutes" className="inline-block align-left time-block">
                <div id="minutes-1" className="inline-block large weight-600 dark">{this.props.points}</div>
                <div id="minutes-text" className="smallest light caps">Points</div>
            </div>
        </div>
    </div> );
    }
}
 
export default ScoreBoard;