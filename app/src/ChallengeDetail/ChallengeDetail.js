import React, { Component } from 'react';
import Axios from "axios";
class ChallengeDetail extends Component {
    state = { id:this.props.match.params.id }
    componentDidMount() {
        Axios.get('http://127.0.0.1:3030/problems/'+this.state.id)
        .then(response=>response.data)
        .then(data=>this.setState({problem:data},()=>console.log(this.state)))
    }
    render() { 
        console.log(this.state);
       
        return ( <div><div>ddd</div></div> );
    }
}
 
export default ChallengeDetail;