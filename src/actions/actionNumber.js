export const incrementNumber = (step) => ({
    type: 'INCREMENT_NUMBER',
    payload: {
        step: step
    }
})

export const decrementNumber = (step) => ({
    type: 'DECREMENT_NUMBER',
    payload: {
        step: step
    }
})
