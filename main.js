// handlers - grab the ui from the html & add listener
document.getElementById('plus').addEventListener('click', plus);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('reset').addEventListener('click', reset);
let counterUi = document.getElementById('counterUi');

// actions
function plus() {
    console.log({ type: 'PLUS' });
    store.dispatch({ type: 'PLUS' }); // we dispatch the action to the reducer in the store
}
function minus() {
    console.log({ type: 'MINUS' });
    store.dispatch({ type: 'MINUS' }); // we dispatch the action to the reducer in the store
}
function reset() {
    console.log({ type: 'RESET' });
    store.dispatch({ type: 'RESET' }); // we dispatch the action to the reducer in the store
}

//reducers - simple switch statements
function counterReducer(currentState, action) {
    // set starting state
    let nextState = {
        count: currentState.count
    }
    // now do switch
    switch (action.type) {
        case 'PLUS':
            nextState.count = currentState.count + 1;
            return nextState;
        case 'MINUS':
            nextState.count = currentState.count - 1;
            return nextState;
        case 'RESET':
            nextState.count = 0;
            return nextState;
        default:
            return currentState;
    }
}

// store
let state = { count: 0 };
let store = Redux.createStore(counterReducer, state);

// UI
store.subscribe(render);

function render() {
    console.log('rendering');
    console.log(store.getState());
    let state = store.getState();
    counterUi.innerHTML = state.count.toString();
}