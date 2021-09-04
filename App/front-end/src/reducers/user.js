const INIT_STATE = {
    tookTest: false 
};

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case "TEST_UPDATE":
            return { ...state, tookTest: payload }
            
        default:
            return state;
    }
};
