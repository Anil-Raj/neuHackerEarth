import React, { Component } from 'react';
import {connect} from 'react-redux';

class NavigationBar extends Component{
    handleSearch=(e)=>{
console.log(e.target.value);

    }
    render(){
        return (
            <div id="header">
                <div class="header-search">
                    <input  class="search-input"type="text" onChange={this.handleSearch}></input>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state)=>{
    return {

    }
}

export default connect(mapStatetoProps,null)(NavigationBar);