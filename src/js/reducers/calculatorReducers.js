const initialState = {output:0, users: []}

const calculatorReducers = (state=initialState,action) => {
    switch (action.type){
        case 'ADD_INPUTS': 
            return {...state,output:action.output}
        case 'SUBTRACT_INPUTS':
            return {...state,output:action.output}
        case 'LOAD_SUCCESS': 
            console.log('Action payload ---> ', action.payload)
            return state;
        default: return {...state}

    }

}

export default calculatorReducers