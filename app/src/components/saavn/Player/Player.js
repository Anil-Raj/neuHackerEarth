import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playSong, pauseSong, resumeSong,updateSongStatus } from '../../redux/actions/index';
import { withRouter } from 'react-router-dom';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import Sound from 'react-sound';

class Player extends Component {

    playNextSong = () => {
        const nextSong = this.props.album.songs[(this.props.album.songs.indexOf(this.props.current_song) + 1) % this.props.album.songs.length]
        this.props.playSong(nextSong);
    }
    playPreviousSong = () => {
        const previousSong = this.props.album.songs[(this.props.album.songs.indexOf(this.props.current_song) - 1) % this.props.album.songs.length]
        this.props.playSong(previousSong);
    }
    handlePlay = ({ position, duration }) => {
        this.props.updateSongStatus({ ...this.props.song_status, position: position, duration: duration })
    }
    handleFinishedPlaying = () => {
        this.playNextSong();
    }
    handleClick = (e) => {
        var rect = e.target.getBoundingClientRect();
        const length = rect.right - rect.left;
        const position = parseInt((e.clientX - rect.left) * 100 / length);

        console.log(position);
        const songPosition = position * this.props.song_status.duration / 100;
        console.log(songPosition);
        this.props.updateSongStatus({ ...this.props.song_status, position: songPosition })
    }
    render() {
        console.log(this.props.current_song);
        const color = "#E8F5E9";
        return (

            <div >
                { this.props.current_song && 
                    <div className="playControls">
                        <Sound
                            url={this.props.current_song.url}
                            playStatus={this.props.song_status.playStatus}
                            onPlaying={this.handlePlay}
                            onFinishedPlaying={this.handleFinishedPlaying}
                            position={this.props.song_status.position}
                        />
                        <div class="controls">
                            <button type="button" className="btn btn-secondary btn-lg" >
                                <MaterialIcon icon="skip_previous" size='large' color={color} onClick={this.playPreviousSong} />
                            </button>
                            <button type="button" className="btn btn-secondary btn-lg" >
                                <div class="placeholder">
                                    {this.props.song_status.playStatus === Sound.status.PLAYING &&
                                        <MaterialIcon icon="pause" size='large' color={color} onClick={this.props.pauseSong} />}
                                    {(this.props.song_status.playStatus === Sound.status.PAUSED || this.props.song_status.playStatus === Sound.status.STOPPED) &&
                                        <MaterialIcon icon="play_arrow" size='large' color={color} onClick={this.props.playSong} />
                                    }
                                </div>
                            </button>
                            <button type="button" className="btn btn-secondary btn-lg" >
                                <MaterialIcon icon="skip_next" size='large' color={color} onClick={this.playNextSong} />
                            </button>
                        </div>
                        <div class="flex width-100  ">
                            <div>
                                <img width="60px" height="60px" src={this.props.current_song.image} />
                            </div>
                            <div class="flex-column width-100">
                                <div class="flex-row row-p20 ">
                                    <div class="album-name">{this.props.album.name}</div>
                                    <div class="song-name">{this.props.current_song.name}</div>
                                </div>
                                <div class="flex-row row-p20 pt-10">
                                    <div class="track-timer">
                                        <span>{parseInt(this.props.song_status.position / 60000)}</span>:
         <span>{parseInt(this.props.song_status.position / 1000) % 60}</span>
                                    </div>
                                    <div class="playbackTimeline__progressWrapper" role="progressbar" onClick={this.handleClick}>
                                        <div class="playbackTimeline__progressBackground"  ></div>
                                        <div class="playbackTimeline__progressBar" style={{ minWidth: "1px", width: (this.props.song_status.position * 100) / this.props.song_status.duration + "%" }} ></div>
                                        <div class="playbackTimeline__progressHandle sc-ir" style={{ left: 100 - (this.props.song_status.position * 100) / this.props.song_status.duration + "%" }} ></div>
                                    </div>
                                    <div class="track-timer">
                                        <span>{parseInt(this.props.song_status.duration / 60000)}</span>:
         <span>{parseInt(this.props.song_status.duration / 1000) % 60}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="player-blur"><img src={this.props.current_song.image} /></div>
                    </div>

                }</div>

        )
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
const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        playSong: (song) => {
            dispatch(playSong(song))

        },
        pauseSong: () => {
            dispatch(pauseSong())

        },
        resumeSong: () => {
            dispatch(resumeSong())

        },
        updateSongStatus:(status)=>{
            dispatch(updateSongStatus(status))
        }
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(Player))