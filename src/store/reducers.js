const initialState = {
    number: 0,
    operations: []
}

function calculatorApp(state = initialState, action) {
    switch (action.type) {
        case 'NUMBER_CLICKED':
            return { ...state, number: action.text }
        default:
            return state;
    }
}

export default calculatorApp;