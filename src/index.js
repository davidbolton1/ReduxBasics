// "The bank" - state
// Describe the ideal version of state
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

// "the teller" - reducer function
// Reducers are always named for the state they manage
// They always receive the current state and the aciton they're processing
function counter(state, action) {
    const newState = { ...state};
    if (action.type === 'INCREMENT') {
    newState.amount = state.amount + 1;
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - 1;
    } else { 
        // no need to do anything
        // We already made a copy of state to return
    }
    // Must return the new version of the state
    return newState;
}

// "push notificaitons" - subscribe to changes in the store

