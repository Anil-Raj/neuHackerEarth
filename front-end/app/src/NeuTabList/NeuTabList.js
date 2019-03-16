import React from 'react';
import "./NeuTabList.css";
function NeuTabList(props) {
    console.log(props);
    
    return (<div className="tab-underline-container-modern ">
        <div className="tab-underline-blue tab-gray-background">
            {
                props.tabList.map(tab =>
                    <div key={tab.id} className={"tab " + (tab.name == 'LIVE' ? 'live' : 'upcoming') + "-tab"} data-scroll={tab.name} onClick={()=>props.handleClick(tab)} >
                        <div className={"tab-name " + (tab.isSelected ? 'selected' : '')} >
                            <div
                                className="dark" > {tab.name} <span className="challenges-count" > {tab.count} </span>
                            </div>
                        </div>
                    </div>)
            }
            <div className="clear"></div>
        </div>
    </div>)
}
export default NeuTabList;