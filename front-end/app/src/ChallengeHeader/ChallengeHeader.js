import React, { Component } from 'react';
import Axios from 'axios';
import NeuTabList from '../NeuTabList/NeuTabList';
class ChallengeHeader extends Component {
    state = { tabList: [] };
    componentDidMount() {
        var serverUrl = "http://127.0.0.1:3030/challenges";

        Axios.get(serverUrl)
            .then(response => response.data)
            .then(data => {
                data[1].isSelected = true;
                this.setState({ tabList: data })
            })

    }
    handleClick = (tab) => {
        var state = this.state.tabList.map(t => {
            t.id == tab.id ? t.isSelected = true : t.isSelected = false;
            return t;
        });
        this.setState({ tabList: state })

    }
    render() {
        return (<div>
            <div>Hackathons, Programming Challenges, and  Coding Competitions</div>
            <NeuTabList tabList={this.state.tabList} handleClick={this.handleClick} />
        </div>);
    }
}

export default ChallengeHeader;