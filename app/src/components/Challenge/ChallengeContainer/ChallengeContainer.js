import React, { Component } from 'react';
import ChallengeHeader from '../ChallengeHeader/ChallengeHeader';
import ChallengeList from '../ChallengeList/ChallengeList';
import ChallengeSideSection from '../ChallengeSideSection/ChallengeSideSection';
import Navbar from '../../Navbar/Navbar'
import {connect} from 'react-redux';
class ChallengeContainer extends Component {
    // render() { 
        // return ( <div><ChallengeHeader/><ChallengeList/><ChallengeSideSection/></div> );
         render() {
                 const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
                return (
                  <div>
                    <Navbar
                      isAuthenticated={isAuthenticated}
                      errorMessage={errorMessage}
                      dispatch={dispatch}
                    />
                    <div className='container'>
                    <div><ChallengeHeader/><ChallengeList/><ChallengeSideSection/></div>
                      {/* <Quotes
                        onQuoteClick={() => dispatch(fetchQuote())}
                        onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
                        isAuthenticated={isAuthenticated}
                        quote={quote}
                        isSecretQuote={isSecretQuote}
                      /> */}
                    </div>
                  </div>
                )
              // }
    }
}
 
// export default ChallengeContainer;


const mapStateToProps = state => ({
  opponent: state.opponent,
  user: state.user
})
const mapDispatchtoProps = (dispatch) =>{
    return {
        dispatch : dispatch
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(ChallengeContainer)