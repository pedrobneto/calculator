const NUMBER_CLICKED = 'NUMBER_CLICKED';

function updateScreen(text) {
    return {
        type: NUMBER_CLICKED,
        text
    }
}

export default updateScreen;