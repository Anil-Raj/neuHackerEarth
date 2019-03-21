import React, { Component } from 'react';
import './CountDown.css'
class CountDown extends Component {
    state = {
        dateTime: this.props.dateTime,
        days: 10, hours: 0, mins: 0, secs: 0
    }
    componentDidMount() {
        setInterval(this.updateTime,100);
       
    }
    updateTime = ()=>{
        var one_day = 1000 * 60 * 60 * 24;
        var date1_ms = new Date("2019 04 04").getTime();
        var date2_ms = new Date().getTime(); // Calculate the difference in milliseconds 
        var difference_ms = date1_ms - date2_ms;
        var sec = difference_ms / 1000;
        var min = sec / 60;
        var hour = min / 60;
        var day = hour / 24; 
        this.setState({ days: parseInt(day),hours: parseInt(hour)%24 ,mins:parseInt(min)%60,secs:parseInt(sec%60)})
    };
    render() {

        return (
            <div className="date date-countdown">
                <div id="countdown-653854" className="countdown">
                    <div className="smaller light caps weight-600">ENDS IN</div>
                    <div id="days" className="inline-block align-left time-block">
                        <div id="days-1" className="inline-block large weight-600 dark">{parseInt(this.state.days / 10)}</div>
                        <div id="days-0" className="inline-block large weight-600 dark">{this.state.days % 10}</div>
                        <div id="colon" className="inline-block large weight-600 dark less-margin-left less-margin-right">:</div>
                        <div id="days-text" className="smallest light caps">Days</div>
                    </div>
                    <div id="hours" className="inline-block align-left time-block">
                        <div id="hours-1" className="inline-block large weight-600 dark">{parseInt(this.state.hours / 10)}</div>
                        <div id="hours-0" className="inline-block large weight-600 dark">{this.state.hours % 10}</div>
                        <div id="colon" className="inline-block large weight-600 dark less-margin-left less-margin-right">:</div>
                        <div id="hours-text" className="smallest light caps">Hour</div>
                    </div>
                    <div id="minutes" className="inline-block align-left time-block">
                        <div id="minutes-1" className="inline-block large weight-600 dark">{parseInt(this.state.mins / 10)}</div>
                        <div id="minutes-0" className="inline-block large weight-600 dark">{this.state.mins % 10}</div>
                        {/* <div id="colon" className="inline-block large weight-600 dark hidden">:</div> */}
                        <div id="minutes-text" className="smallest light caps">Minutes</div>
                    </div>
                    {/* <div id="seconds" className="inline-block align-left hidden">
                        <div id="seconds-1" className="inline-block large weight-600 dark">{parseInt(this.state.secs /10) }</div>
                        <div id="seconds-0" className="inline-block large weight-600 dark">{parseInt(this.state.secs % 10)}</div>
                        <div id="seconds-text" className="smallest light caps">Seconds</div>
                    </div> */}
                </div>
            </div>

        );
    }
}

export default CountDown;