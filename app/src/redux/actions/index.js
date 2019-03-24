export function addRef(payload){
    return { type:"UPDATE_SCROLL",payload}
};
export function updateActiveTab(payload){
    return {type:"UPDATE_ACTIVE_TAB",payload}
}
export function updateOpponent(payload){
    return {type:"UPDATE_OPPONENT",payload}
}
export function updateUser(payload){
    return {type:"UPDATE_USER",payload}

}