import React, { Component } from 'react';
import Player from '../Player/Player';
import {connect} from 'react-redux';
import SongList from '../SongList/SongList';
import {selectAlbum} from '../../redux/actions/index'

class PlayListDetail extends Component{
    state = { id:this.props.match.params.id }
    componentDidMount() {
        this.props.playAlbum(this.props.match.params.id);
    }
    render(){
        return(
            <div>
            <SongList/>
            <Player/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        song:state.current_song
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        playAlbum:(id)=>{
            dispatch(selectAlbum(id))
        }
    }
   
}

export default  connect(mapStateToProps,mapDispatchToProps)(PlayListDetail);