const initalState = {
    articles: [],
    scrollRefs : [],
    activeTab: {page:"",tab:{id: 1, name: "UPCOMING", count: 8}},
    tabList: [{"id":1,"name":"LIVE","count":8},{"id":2,"name":"UPCOMING","count":8},{"id":3,"name":"PREVIOUS","count":100}]
};
function rootReducers(state = initalState, action){
    switch(action.type){
        case "UPDATE_SCROLL": return {...state, scrollRefs:state.scrollRefs.concat(action.payload)};
        case "UPDATE_ACTIVE_TAB": return {...state, activeTab: action.payload}; 
        case "UPDATE_OPPONENT": return {...state, opponent:action.payload};
        case "UPDATE_USER": return {...state, user:action.payload};
        default: return state;
    }
}
export default rootReducers;