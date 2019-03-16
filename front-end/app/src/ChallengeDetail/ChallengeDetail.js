import React, { Component } from 'react';
class ChallengeDetail extends Component {
    state = { id:this.props.match.params.id }
    componentDidMount() {
        fetch('http://127.0.0.1:3030/problem/'+this.state.id)
        .then(data=>{console.log(JSON.parse(data));
       return JSON.parse(data); })
        .then(data=>this.setState({problem:data},()=>console.log(this.state)))
    }
    render() { 
        console.log(this.state);
       
        return ( <div><div>{this.state.problem}</div></div> );
    }
}
 
export default ChallengeDetail;