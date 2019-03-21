
import React, { Component } from 'react'
import Axios from 'axios'
export default class CodeArenaBattleRing extends Component {
        state = {
            language: "CSharp",
            languageList: [{value:"JS",displayName:"Javascript"}, {value:"CSharp ",displayName:"CSharp"}],
            userId:0,
            poolId:0
        }
        componentDidMount() {
          
        }
        updateUser = (event)=>{
            console.log(event);
            
            this.setState({userId:event.target.value})
        }       
        updatePool = (event)=>{
            console.log(event);

            this.setState({poolId:event.target.value})
        }
        submit() {
            console.log({code:this.state.code,language:this.state.language,userId:this.state.userId,poolId:this.state.poolId});
            
            Axios.post('http://localhost:3030/codearena/ring', {code:this.state.code,language:this.state.language,userId:this.state.userId,poolId:this.state.poolId})
                .then(response =>response.data)
                .then(data => this.setState({ output: data }))
        }
        handleChange = (code) => this.setState({ code: code });
    
        render() {
            return (<div className="App">
                <div className="card-right-section">
                    <div className="code-editor-wrapper">
                        <div className="editor-header">
                            <span className="brown-color">LANGUAGE:</span>
                            <select className="editor-lang-select">
                                {this.state.languageList.map((language,index) => <option key={index} value={language.value}>{language.displayName}</option>)}
                            </select>
                            <input type="text" value={this.state.userId} onChange={this.updateUser}></input>
                            <input type="text" value={this.state.poolId}  onChange={this.updatePool}></input>
                        </div>
                        <div contentEditable="true" id="code-editor" className="text-input" onInput={e => { this.handleChange(e.currentTarget.textContent) }} onChange={this.handleChange}
                            value={this.state.code}></div>
                        <div className="footer">
    
                            <button className="submit-btn" onClick={() => this.submit()}>SUBMIT</button>
                        </div>
                    </div>
                    <div className="submission-wrapper">
                        {this.state.output}
                    </div>
                </div>
    
            </div>);
        }
    
}
