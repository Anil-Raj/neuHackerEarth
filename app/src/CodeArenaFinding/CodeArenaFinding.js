import React, { Component } from 'react';
import Axios from 'axios';
class CodeArenaFinding extends Component {
    state = {  }
    componentDidMount() {
        Axios.get('http://localhost:3000/codearena/findring')
    }
    render() { 
        return ( <div>finding</div> );
    }
}
 
export default CodeArenaFinding;