import React, { Component } from 'react';
import Axios from 'axios';
import './CodeArenaFinding.css';
import {connect} from 'react-redux';
import { updateOpponent,updateUser} from "../../redux/actions/index";

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3030');
class CodeArenaFinding extends Component {
    intervalID = 0;
    constructor(props){
        super(props);
        
    this.state = {
        timestamp: 'no timestamp yet',
        user:{
            id:1,
            avatar:"https://he-s3.s3.amazonaws.com/media/avatars/anilraj659/resized/50/photo.jpg",
            name:"Raj"
        },
        opponent:null,
        inputEntered:false,
        counter:4
    }
    }
    componentDidMount() {
        // Axios.get('http://localhost:3000/codearena/ring/')
        socket.on('join_fight', pool =>{
            console.log(pool);
            pool.users.map(u=>{
                if(!(u.id == this.state.user.id) ){
                    console.log(u)
                    this.setState({opponent:u});
                    this.intervalID = setInterval(()=>{ 
                        this.setState({counter:this.state.counter-1},()=>{
                        if(this.state.counter == 0){
                            this.props.updateUser(this.state.user);
                            this.props.updateOpponent(u);
                            this.props.history.push('/ring/'+pool.id);
                        }
                    });},100)
                   
                }
            })

        }); 
    }
    componentWillUnMount(){
        clearInterval(this.intervalID);                  
        socket.off('join_fight', () =>{
        })
    }
    updateUser = (event) => {
        this.setState({ user: {...this.state.user,id:event.target.value }});
    }
    findRing = () =>{
        this.setState({inputEntered:true});
        Axios.post('http://localhost:3030/codearena/join_fight',{user:this.state.user})
        .then(response => response.data)
        .then(data => {
            console.log(data);
            this.setState({ poolId: data.id });
            
        })
};
    render() {
                     
            return ( 

                    <div className="container">
                    {
                        this.state.inputEntered &&
                        <div>
                        <div className="App">
                        <p className="App-intro">
                        This is the timer value: {this.state.timestamp}
                        </p>
                      </div>
                    <div className="centered dark">
                        <div className="fight-image">
                        { !this.state.opponent ?<img src="https://static-fastly.hackerearth.com/static/fight_club/images/Logo_1.png" />:<span>{this.state.counter}</span>}
                        </div>
                        <div className="users-container regular clear">
                            <div className="left-user inline-block middle-align">
                                <div className="image"><img src={this.state.user.avatar} alt="anilraj659" width="50" height="50" /></div>
                                <div className="weight-700">You</div>
                                <div className="small light">{this.state.user.name} </div>
                            </div>
                            <div className="inline-block vs">VS</div>
                            { !this.state.opponent ?
                                <div className="left-user inline-block middle-align" id="opponent">
                                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                    <div className="light small finding-opponent">finding opponent
                                    </div>
                                </div>:
                                <div className="left-user inline-block middle-align">
                                    <div className="image"><img src={this.state.opponent.avatar} alt="anilraj659" width="50" height="50" /></div>
                                    <div className="weight-700">You</div>
                                    <div className="small light">{this.state.opponent.name} 
                                </div>
                                </div>
                            }
                        </div>
                    </div>
                    </div>
                    }
                    { 
                        !this.state.inputEntered &&
                        <div>
                            <input type="text" value={this.state.userId} onChange={this.updateUser}></input>
                            {/* {" poolId:" + this.state.poolId} */}
                            <button onClick={this.findRing}>findRing</button>
                        </div>
                    }
                </div> );
    }
}


 
// const mapStateToProps = state => (
//     {
//     scrollRefs: state.scrollRefs,
//     activeTab:state.activeTab
// })
const mapDispatchtoProps = (dispath) =>{
    return {
        updateOpponent : (opponent)=>{
            dispath(updateOpponent(opponent) )

        },
        updateUser : (user)=>{
            dispath(updateUser(user) )

        }
    }
}

export default connect(null,mapDispatchtoProps)(CodeArenaFinding);