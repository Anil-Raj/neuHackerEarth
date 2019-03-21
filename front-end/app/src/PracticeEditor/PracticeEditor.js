import React, { Component } from 'react';
import axios from 'axios';
import Axios from 'axios';
class PracticeEditor extends Component {
    state = {
        language: "JS",
        languageList: [{value:"JS",displayName:"Javascript"}, {value:"CSharp ",displayName:"CSharp"}]
    }
    componentDidMount() {
        Axios.get('http://localhost:3030/problems/' + this.props.match.id)
            .then(response => response.data)
            .then(data => this.setState({ problem: data }))
    }
    submit() {
        axios.post('http://localhost:3030/compile', {code:this.state.code,language:this.state.language})
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

export default PracticeEditor;