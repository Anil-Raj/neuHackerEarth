import React,{Component} from 'react';
import {connect} from 'react-redux'
import "./NeuTabList.css";
import { updateActiveTab } from "../redux/actions/index";
class NeuTabList extends Component {
    constructor(props){
        super(props);
        console.log(props);
        
    }
     handleTabClick = (tab)=> {

        //  console.log(this.props.scrollRefs.find(el => el.name == tab.name));
         console.log(this.props);
         
         this.props.onUpdateACtiveTab({page:'',tab:tab})
         this.props.scrollRefs.find(el => el.name == tab.name).ref.current.scrollIntoView(); 

    };
    render() { 
        console.log(this.props);
        return ( 
            <div className="tab-underline-container-modern ">
        <div className="tab-underline-blue tab-gray-background">
            {
                this.props.tabList.map(tab =>
                    <div key={tab.id} className={"tab " + (tab.name == 'LIVE' ? 'live' : 'upcoming') + "-tab"} data-scroll={tab.name} onClick={()=>this.handleTabClick(tab)} >
                        <div className={"tab-name " + (this.props.activeTab.tab.name == tab.name ? 'selected' : '')} >
                            <div
                                className="dark" > {tab.name} <span className="challenges-count" > {tab.count} </span>
                            </div>
                        </div>
                    </div>)
            }
            <div className="clear"></div>
        </div>
    </div>
         );
    }
}
 
// export default NeuTabList;
// function NeuTabList(props) {
//     console.log(props);
    
    
//     return (
    
//     }


const mapStateToProps = state => (
    {
    scrollRefs: state.scrollRefs,
    activeTab:state.activeTab
})
const mapDispatchtoProps = (dispath) =>{
    return {
        onUpdateACtiveTab : (activeTab)=>{
            dispath(updateActiveTab(activeTab) )

        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(NeuTabList);