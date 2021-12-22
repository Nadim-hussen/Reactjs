

const initialState = 0;

const changeNumber = (state = initialState,action)=>{
switch(action.type){
    case "increment" : return state + action.payload;
    case "decrement" : return state - 5;
    case "multiply" : return state * action.payload;
    case "division" : return state / action.payload;
    default: return state;
}
}
export default changeNumber