import React, { Component } from 'react'
import Axios from 'axios';
import './CodeArenaBattleRing.sass';
import { connect } from 'react-redux';

class CodeArenaBattleRing extends Component {
    state = {
        language: "CSharp",
        languageList: [{ value: "JS", displayName: "Javascript" }, { value: "CSharp ", displayName: "CSharp" }],
        isActivityMinimized: true
    }
    componentDidMount() {



    }
    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value }, () => { console.log(this.state) });
    }

    submit() {
        console.log({ code: this.state.code, language: this.state.language, user:this.props.user});

        Axios.post('http://localhost:3030/compile', { code: this.state.code, language: this.state.language, user:this.props.user})
            .then(response => response.data)
            .then(data => {
                this.setState({ output: data.result });
                this.setState({ score: data.result.users })
            })
    }
    handleChange = (code) => this.setState({ code: code });

    render() {
        return (
            <div className="code-arena">
                <div className="fight-header">
                    <div className="users-container dark" >
                        <div className="user margin-left-33 current-user padding-right-10" >
                            <div className="float-left" >
                                <div className="full-name weight-600 regular text-right" > You </div>
                                <div className="username light weight-400" > {this.props.user.name} </div>
                            </div>
                            <div className="float-left gravatar" >
                                <img src={this.props.user.avatar} width="30" height="30" />
                            </div>
                            <div id="score-1330965" className="score float-left score-left" style={{ paddingLeft: "5px", paddingRight: "10px" }} >
                                <div className="solved solved-left inline-block solved-more" > {this.props.user.solved} </div> <div className="slash inline-block" > /</div >
                                <div className="total inline-block" > 10 </div>
                            </div>
                        </div>
                        <div className="user margin-left-33 other-user" >
                            <div id="score-1234205" className="score float-left score-right" >
                                <div className="solved solved-left inline-block solved-more" >  {this.props.opponent.solved} </div>
                                <div className="slash inline-block" > /</div >
                                <div className="total inline-block" > 10 </div>
                            </div>
                            <div className="float-left gravatar" >
                                <img src={this.props.opponent.avatar} width="30" height="30" />
                            </div>
                            <div className="float-right medium-margin-right" >
                                <div className="full-name weight-600 regular" >  {this.props.opponent.name}  </div>
                                <div className="username light weight-400" >  {this.props.opponent.name}  </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <div className='flex'>
                        <div className='problem-container column'>
                            <div className='statement' style={this.state.isActivityMinimized ?{height:"calc(100vh - 120px)"}:{height:"calc(60vh - 120px)"}}>
                                <div className="regular problem-statement-header weight-600">
                                    <div className="float-left">PROBLEM STATEMENT</div>
                                    <div className="float-right"> Points: 30</div>
                                </div>

                            </div>
                            <div className="activity-heading regular weight-600 dark caps">Activity
                                    <div className="inline-block notification-count" style={{ display: "none" }}>0</div>
                                <i className={this.state.isActivityMinimized ? "fa toggle-size fa-window-maximize float-right" : "fa toggle-size fa-window-minimize float-right"} aria-hidden="true" onClick={()=>{this.setState({isActivityMinimized:!this.state.isActivityMinimized})}}></i>
                            </div>
                            {
                                !this.state.isActivityMinimized &&
                                <div> activity 
                                    </div>

                            }
                        </div>
                        <div className='code-container column'>
                            <div className="editor-header">
                                <span className="brown-color">LANGUAGE:</span>
                                <select className="editor-lang-select">
                                    {this.state.languageList.map((language, index) => <option key={index} value={language.value}>{language.displayName}</option>)}
                                </select>
                            </div>
                            <div contentEditable="true" id="code-editor" className="text-input" onInput={e => { this.handleChange(e.currentTarget.textContent) }} onChange={this.handleChange}
                                value={this.state.code}></div>
                            <div className="footer">

                                <button className="submit-btn" onClick={() => this.submit()}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ring-footer">
                    <a id="quit-fight-btn">
                        <div className="fight-quit float-left regular dark">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <span>Finish and Quit</span>
                        </div>
                    </a>
                    <div className="new-buttons-container regular">
                        <button id="compile-test-button" className="compile-test-button fight-button button">
                            Run
                                </button>
                        <button id="submit-button" className="submit-button fight-button button">
                            Submit
                                </button>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    opponent: state.opponent,
    user: state.user
})
// const mapDispatchtoProps = (dispath) =>{
//     return {
//         updateOpponent : (opponent)=>{
//             dispath(updateOpponent(opponent) )

//         }
//     }
// }

export default connect(mapStateToProps, null)(CodeArenaBattleRing);