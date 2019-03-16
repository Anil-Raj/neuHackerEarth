import React, { Component } from 'react';
import "./ChallengeList.css";
import CountDown from '../CountDown/CountDown';
class ChallengeList extends Component {
    state = {
        challengeList: [{
            id: 1,
            type:'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 2,
            type:'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }]
    }
    // handleStartChallenge = (challenge) =>{
    //     this.history.push()
    // }
    render() {
        return (
            <div id="challenge-container" className="challenge-container">
                <div className="ongoing challenge-list" >
                    <h2 className="dark" >LIVE CHALLENGES</h2>
                    <div className="section-line" ><span></span></div>
                    <div className="clear"></div>
                    {this.state.challengeList.map(challenge =>
                        <div key={challenge.id} className="challenge-card-modern">
                            <a className="challenge-card-wrapper challenge-card-link" target="_blank" href="/codearena/">
                                <div className="challenge-list-image challenge-card-wrapper">
                                    <div className="empty-image" style={{ backgroundImage: "url(" + 'https://static-fastly.hackerearth.com/static/fight_club/images/fc-listing_1.jpg)' }}>
                                        <div className="company-details ellipsis">
                                            <div className="inline-block company-image" style={{ backgroundImage: "url(" + challenge.company.image + ")" }}>
                                            </div>
                                            {challenge.company.name}
                                        </div>
                                        <div className="registrations-container align-center">
                                            <div className="registrations tool-tip align-left" title="Users fighting">
                                                <i className="fa fa-user"></i> {challenge.usersFighting}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="challenge-content align-center">
                                    <div className="challenge-type light smaller caps weight-600">
                                        {challenge.type}
                                    </div>
                                    <div className="challenge-name ellipsis dark" title="International Women's Hackathon 2019">
                                        <span className="challenge-list-title challenge-card-wrapper">{challenge.title}</span>
                                    </div>
                                    <div className="challenge-list-meta challenge-card-wrapper">
                                        <div className="challenge-desc light">

                                            <CountDown dateTime={Date("2019 04 04")} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="challenge-button">
                                 {/* <div  className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " onClick={()=>handleStartChallenge(challenge)} target="login-modal">Start Now</div>  */}

                                <a href={"/challenge/"+challenge.id} className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " target="login-modal">Start Now</a>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ChallengeList;