import React, { Component } from 'react';
import axios from 'axios';
import Colorize from './colorize'
class PracticeEditor extends Component {
    state = {
        language: "JS",
        languageList: [{ value: "JS", displayName: "Javascript" }, { value: "CSharp ", displayName: "CSharp" }]
    }
    codeEditor = React.createRef();
    codeContainer = React.createRef();
    componentDidMount() {
        axios.get('http://localhost:3030/problems/' + this.props.match.id)
            .then(response => response.data)
            .then(data => this.setState({ problem: data }))
    }
    submit() {
        console.log({ code: this.state.code, language: this.state.language });

        axios.post('http://localhost:3030/compile', { code: this.state.code, language: this.state.language })
            .then(response => response.data)
            .then(data => this.setState({ output: data }))
    }

    getClassNamebyString = (str) =>{
        return this.stylableWordClassList.find(obj=> obj.list.find(str) !== undefined ).className;
    }
    handleLanguageChange = (event) => this.setState({ language: event.target.value })
    handleChange = (code) => this.setState({ code: code });

    colorize = () => {
        var colorize = new Colorize();
        this.codeContainer.current.innerHTML = this.codeEditor.current.innerHTML.replace(colorize.getRegex(),(str)=>{colorize.getColorizedContent(str)})
    }
    handleKeyDown = (event) => {

        this.colorize(event);
        console.log(event);
        const code = event.currentTarget.textContent
        this.setState({ code: code });
        let charCode = String.fromCharCode(event.which).toLowerCase();
        if (event.ctrlKey && charCode === 'c') {
            console.log("Ctrl + C pressed");
        } else if (event.ctrlKey && charCode === 'v') {
            console.log("Ctrl + V pressed");
        } else if (event.ctrlKey && charCode === 's') {
            event.preventDefault();
            console.log("Ctrl + S pressed");
        }

        // For MAC we can use metaKey to detect cmd key

        if (event.metaKey && charCode === 'c') {
            console.log("Cmd + C pressed");
        } else if (event.metaKey && charCode === 'v') {
            console.log("Cmd + V pressed");
        } else if (event.metaKey && charCode === 's') {
            event.preventDefault();
            console.log("Cmd + S pressed");
        }
    }

    render() {
        return (<div className="App">
            <div className="card-right-section">
                <div className="code-editor-wrapper">
                    <div className="editor-header">
                        <span className="brown-color">LANGUAGE:</span>
                        <select className="editor-lang-select" value={this.state.language} onChange={this.handleLanguageChange}>
                            {this.state.languageList.map((language, index) => <option key={index} value={language.value}>{language.displayName}</option>)}
                        </select>
                    </div>

                    <div className="text-input ">
                        <div id="dummy" className="original" ref={this.codeContainer}>

                        </div>
                        <div id="board" contentEditable="true" ref={this.codeEditor} className="original" onInput={e => this.handleKeyDown(e)} onChange={this.handleKeyDown} onKeyDown={this.handleKeyDown}
                            value={this.state.code}>

                        </div>
                    </div>






                    {/* 
                    <div contentEditable="true" ref={this.codeEditor} id="code-editor" className="text-input" onInput={e => this.handleKeyDown(e)} onChange={this.handleKeyDown} onKeyDown={this.handleKeyDown}
                        value={this.state.code}></div> */}
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