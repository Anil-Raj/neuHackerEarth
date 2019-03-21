import React, { Component } from 'react';
import ChallengeHeader from '../ChallengeHeader/ChallengeHeader';
import ChallengeList from '../ChallengeList/ChallengeList';
import ChallengeSideSection from '../ChallengeSideSection/ChallengeSideSection';
class ChallengeContainer extends Component {
    render() { 
        return ( <div><ChallengeHeader/><ChallengeList/><ChallengeSideSection/></div> );
    }
}
 
export default ChallengeContainer;