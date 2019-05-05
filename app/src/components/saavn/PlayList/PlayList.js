import React, { Component } from 'react';
import { playSong } from '../../redux/actions/index';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

class PlayList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.songs.map(song =>
                        <Link to={"/songs/"+song.id} key={song.id}><div>{song.id}</div></Link>
                    )
                }
            
                
            </div>

        )
    }
}

const mapStatetoProps = (state) => {
    return {
        songs: state.songs
    }
}
const mapDispatchtoProps = (dispath) => {
    return {
        playSong: (song) => {
            dispath(playSong(song))

        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PlayList);