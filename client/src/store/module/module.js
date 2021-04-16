const initialState = {
    curModule: null,
    moduleList: []
}

export const STORE_MODULE_SPACE = 'moduleReducer'
export const SELECT_MODULE_ACTION = 'SELECT_MODULE_ACTION'
export const CREATE_MODULE_ACTION = 'CREATE_MODULE_ACTION'


export const mapModuleStateToProps = (state) => {
    const { curModule, moduleList } = state[STORE_MODULE_SPACE]
    return { curModule, moduleList }
}

export const mapModuleDispatchToProps = (dispatch) => {
    return {
        createModule (module) {
            dispatch({ type: CREATE_MODULE_ACTION, payload: module })
        },
        selectModule (module) {
            dispatch({ type: SELECT_MODULE_ACTION, payload: module })
        }
    }
}


export const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_MODULE_ACTION:
            return { ...state, curModule: action.payload }
        case CREATE_MODULE_ACTION:
            const { moduleList } = state
            moduleList.push(action.payload)
            return {...state, moduleList: [...moduleList] }
        default:
            return state
    }
}
