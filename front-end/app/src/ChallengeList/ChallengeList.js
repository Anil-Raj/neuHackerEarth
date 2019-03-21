import React, { Component } from 'react';
import { connect } from 'react-redux'
import "./ChallengeList.css";
import CountDown from '../CountDown/CountDown';
import { addRef } from "../redux/actions/index";
import ScoreBoard from '../ScoreBoard/ScoreBoard';
class ChallengeList extends Component {
    constructor(props) {
        super(props);
        this.previousRef = React.createRef();
        this.upcomingRef = React.createRef();
        this.liveRef = React.createRef();

    }
    state = {
        challengeList: [{
            id: "ffa7b6c7425c15a5d23828083b573e5df1622970",
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 2,
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 3,
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 4,
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 5,
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 6,
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 7,
            type: 'Hackathon',
            title: "International Women's Hackathon 2019",
            usersFighting: 180,
            company: {
                image: 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
                name: 'hackerEarth'
            }
        }, {
            id: 8,
            type: 'Hackathon',
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
    componentDidMount() {
        // this.footerRef.current.scrollIntoView();
        this.props.onAddRefs({ name: "UPCOMING", ref: this.upcomingRef });
        this.props.onAddRefs({ name: "LIVE", ref: this.liveRef });
        this.props.onAddRefs({ name: "PREVIOUS", ref: this.previousRef });

    }
    render() {
        return (
            <div id="challenge-container" className="challenge-container">
                <div className="ongoing challenge-list" >
                    <h2 className="dark" ref={this.liveRef} >LIVE CHALLENGES</h2>
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
                                        <div className="challenge-list-title challenge-card-wrapper">{challenge.title}</div>
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

                                <a href={"/challenge/" + challenge.type + "/" + challenge.id} className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " target="login-modal">Start Now</a>

                            </div>
                        </div>
                    )}
                    <div key="asdfadfasdf2134134" className="challenge-card-modern">
                            <a className="challenge-card-wrapper challenge-card-link" target="_blank" href="/codearena/">
                                <div className="challenge-list-image challenge-card-wrapper">
                                    <div className="empty-image" style={{ backgroundImage: "url(" + 'https://static-fastly.hackerearth.com/static/fight_club/images/fc-listing_1.jpg)' }}>
                                        <div className="company-details ellipsis">
                                            <div className="inline-block company-image" style={{ backgroundImage: "url(" + this.props.codearena.image + ")" }}>
                                            </div>
                                           hackerEarth
                                        </div>
                                        <div className="registrations-container align-center">
                                            <div className="registrations tool-tip align-left" title="Users fighting">
                                                <i className="fa fa-user"></i> {this.props.codearena.usersFighting}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="challenge-content align-center">
                                    <div className="challenge-type light smaller caps weight-600">
                                       codearena
                                    </div>
                                    <div className="challenge-name ellipsis dark" title="International Women's Hackathon 2019">
                                        <span className="challenge-list-title challenge-card-wrapper">Let the fight Begin</span>
                                    </div>
                                    <div className="challenge-list-meta challenge-card-wrapper">
                                        <div className="challenge-desc light">

                                            <ScoreBoard fights={4} wins={0} points={0} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="challenge-button">
                                {/* <div  className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " onClick={()=>handleStartChallenge(challenge)} target="login-modal">Start Now</div>  */}

                                <a href={"/challenge/codearena/finding" } className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " target="login-modal">Start Now</a>

                            </div>
                        </div>
                    
                </div>
                <div ref={this.upcomingRef}>upcoming</div>
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

                            <a href={"/challenge/" + challenge.id} className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " target="login-modal">Start Now</a>

                        </div>
                    </div>
                )}
                <div ref={this.previousRef}>previous</div>
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

                            <a href={"/challenge/"+challenge.type+"/"+ challenge.id} className="anon-non-hiring-register-button button btn-green-bright btn-large inline-block show-modal login-modal-redirect " target="login-modal">Start Now</a>

                        </div>
                    </div>
                )}
            </div>
        );
    }
}
const mapStatetoProps = (state)=>{
    return {
        codearena:{usersFighting:10,image:'http://google.com'}
    }
}
const mapDispatchtoProps = (dispath) => {
    return {
        onAddRefs: (refs) => {
            dispath(addRef(refs))

        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ChallengeList);