const initialState = {
    number: 0,
    operations: []
}

function calculatorApp(state = initialState, action) {
    switch (action.type) {
        case 'NUMBER_CLICKED':
            if (state.number == '0') return { ...state, number: action.text }

            return { ...state, number: state.number + action.text }
        case 'OPERATION_CLICKED':
            return {
                ...state,
                operations: [...state.operations, state.number, action.text],
                number: '0'
            }
        case 'EQUALS_CLICKED':
            return {
                ...state,
                number: parseFloat(state.operations[0]) + parseFloat(state.number),
                operations: []
            }
        case 'AC_CLICKED':
            return {
                ...state,
                number: '0',
                operations: []
            }
        default:
            return state;
    }
}

export default calculatorApp;