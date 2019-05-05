import React, { Component } from 'react';
class ProblemCard extends Component {
    state = { id:this.props.id, problem:null }
    render() { 
        return ( <div className="problem-card"><div className="name">{this.state.problem.name}</div><div ></div></div> );
    }
}
 
export default ProblemCard;