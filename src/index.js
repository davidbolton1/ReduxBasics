import {
    createStore
} from 'redux';
// "The bank" - state
// Describe the ideal version of state
/*
{
    amount: 100
}

// If we add 1 to the amount, what would state be?
{
    amount: 101
}


// "A transaction slip" - action
{
    type: 'INCRIMENT'
}

{
    type: 'DECREMENT'
}

{
    type: 'Emoji'
}
*/
// "the teller" - reducer function
// Reducers are always named for the state they manage
// They always receive the current state and the aciton they're processing
const INCREMENT = 'INCREMENT' //You can define it here to get rid of typos
const defaultState = {amount:100};

// You can write action creator functions to format action objects (to avoid types)
function actionIncrement(howMuch=1) {
    return {
        type: INCREMENT,
        amount: howMuch
    }
}

function counter(state=defaultState, action) {
    const newState = { ...state};

    switch(action.type) {
        case INCREMENT:
            newState.amount = state.amount + action.amount;
            break;
        case 'DECREMENT':
            newState.amount = state.amount - action.amount;
            break;
        default:
            break;
    }
    /*
    if (action.type === 'INCREMENT') {
    newState.amount = state.amount + action.amount;
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - action.amount;
    } else { 
        // no need to do anything
        // We already made a copy of state to return
    }
    // Must return the new version of the state
    */
    return newState;
    
}

// You give it a reducter, it gives you a 'store'
// the store is an object that manages your state using your reducter
const store = createStore(counter);

// "push notificaitons" - subscribe to changes in the store
store.subscribe(() => {
    console.log('The state is now')
    console.table(store.getState())
});

// Let's give the store some actions to process.

store.dispatch(
    /*
    {
    type: INCREMENT,
    amount: 5
    }
    */
   actionIncrement(10)
);


store.dispatch({
    type: 'DECREMENT',
    amount: 2
});


