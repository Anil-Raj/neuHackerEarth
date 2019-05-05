import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../NavigationBar/NavigationBar'
class SongGrid extends Component{
    playAlbum=(id)=>{
        this.props.history.push('/playlist/'+id);
    }
    render(){
        const defaultImage = "https://static.saavncdn.com/_i/3.0/album-default.png";

        return (
            <React.Fragment>
            <NavigationBar></NavigationBar>
            <div class="album-grid">
                {
                    this.props.albums.map((album,i)=>
                    <div class="album-art">
                        <div class="art group-art ">
                        { 
                            [...Array(4)].map((e,i) => 
                                album.songs &&  album.songs[i] && 
                                <img src={album.songs[i]?album.songs[i].image:defaultImage}  alt="Song"/>
                            )
                         
                        }
                        {
                             [...Array(4)].map((e,i) => <img src={defaultImage} alt="May18 Songs" /> )
                        }
                            <div class="overlay-actions">
                                <div class="overlay-action-buttons">
                                    <button class="play dark-bg" onClick={(id)=>this.playAlbum(i)}>Play</button>
                                </div>
                            </div>
                        </div>
                        </div>
    
                )
            }
            </div>
      
            </React.Fragment>

             )
    }
}

const mapStatetoProps = (state)=>{
    return {
        albums:state.albums
    }
}
export default connect(mapStatetoProps,null)(SongGrid);

