import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import SongItem from '../SongItem/SongItem';
import { playSong, pauseSong, resumeSong, selectAlbum} from '../../redux/actions/index';


class SongList extends Component {
    playPlayList=()=>{

    }
    handleSongPlay=(song)=> this.props.playSong(song);

    playAlbum = () => this.props.playSong(this.props.album.songs[0]);
    render() {
        const defaultImage = "https://static.saavncdn.com/_i/3.0/album-default.png";
        return (
            <section id="main">
                <div>
                    <div class="page-header flush simple">
                        <div class="art group-art">
                        { 
                            [...Array(4)].map((e,i) => 
                                this.props.album.songs &&  this.props.album.songs[i] && 
                                <img src={this.props.album.songs[i]?this.props.album.songs[i].image:defaultImage}  alt="Song"/>
                            )
                         
                        }
                        {
                             [...Array(4)].map((e,i) => <img src={defaultImage} alt="May18 Songs" /> )
                        }
                            <div class="overlay-actions">
                                <div class="overlay-action-buttons">
                                    <button class="play dark-bg" onClick={this.playAlbum}>Play</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="song-list page-group track-list">
                        {
                            this.props.album.songs && this.props.album.songs.map(song =>
                                <SongItem song={song} handlePlay={()=>this.handleSongPlay(song)}/>

                            )
                        }
                    </div>

                </div>
            </section>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        album: state.album,
        next_song: state.next_song,
        previous_song: state.previous_song,
        current_song: state.current_song,
        song_status: state.song_status
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
 return {
        playSong: (song) => {
            dispatch(playSong(song))

        },
        pauseSong: () => {
            dispatch(pauseSong())

        },
        resumeSong: () => {
            dispatch(resumeSong())

        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(SongList);