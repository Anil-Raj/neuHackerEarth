import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.value = "";
    this.state = {
      code: "return",
      output: "RESULT"
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3030")
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
  }
  handleChange(value) {
    this.setState({ code: value });
  }
  submit() {
    console.log(this.state.code);
    axios.post('http://localhost:3030', {code:this.state.code})
      .then((res) => {
        this.setState({ output: res.data });
      })
  }
  render() {
    return (
      <div className="App">
        <div className="card-right-section">
          <div className="code-editor-wrapper">
            <div className="editor-header">
            <span className="brown-color">LANGUAGE:</span>
            <select className="editor-lang-select">
              <option>Javascript</option>
            </select>
            </div>
            <div contentEditable="true" id="code-editor" className="text-input" onInput = {e => {this.handleChange(e.currentTarget.textContent)}} onChange={this.handleChange}
                value={this.state.code}></div>
              <div className="footer">

                <button className="submit-btn" onClick={() => this.submit()}>SUBMIT</button>
              </div>
            </div>
              <div className="submission-wrapper">
                {this.state.output}
              </div>
            </div>

          </div>

          );
        }
      }
      
      export default App;
