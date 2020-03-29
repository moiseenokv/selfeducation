const clickerReducer = (state = 20, action) => {
    switch(action.type) {
        case 'MULT': {
            return state * 10;
        }
        default:
            return state;
    }
}

export default clickerReducer;
