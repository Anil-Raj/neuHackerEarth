import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialIcon, { colorPalette } from 'material-icons-react';

export default class SongItem extends Component {
    render() {
        return (
            <div class="song-wrap">
                <div class="flex width-100  ">
                    <div onClick={this.props.handlePlay}>
                        <img width="60px" height="60px" src={this.props.song.image} alt={this.props.song.name} />
                    </div>
                    <div class="flex-column width-100">
                        <div class="pl-20 album-name">
                            <div>{this.props.song.name}</div>
                        </div>
                        <div class="pl-20 song-name ">
                            <div>{this.props.song.name}</div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}