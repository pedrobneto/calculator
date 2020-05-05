const NUMBER_CLICKED = 'NUMBER_CLICKED';
const OPERATION_CLICKED = 'OPERATION_CLICKED';
const EQUALS_CLICKED = 'EQUALS_CLICKED';
const AC_CLICKED = 'AC_CLICKED';

export function updateScreen(text) {
    return {
        type: NUMBER_CLICKED,
        text
    }
}

export function addOperation(text) {
    return {
        type: OPERATION_CLICKED,
        text
    }
}

export function addNumber(text) {
    return {
        type: OPERATION_CLICKED,
        text
    }
}

export function showResult() {
    return {
        type: EQUALS_CLICKED,
    }
}

export function clearOperations() {
    return {
        type: AC_CLICKED,
    }
}