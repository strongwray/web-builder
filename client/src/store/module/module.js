const initialState = {
    curModule: null,
    moduleList: []
}

export const STORE_MODULE_SPACE = 'moduleReducer'
export const SELECT_MODULE_ACTION = 'SELECT_MODULE_ACTION'
export const CREATE_MODULE_ACTION = 'CREATE_MODULE_ACTION'
export const UPDATE_MODULE_DATA_ACTION = 'UPDATE_MODULE_DATA_ACTION'


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
        },
        updateModuleData (data) {
            dispatch({ type: UPDATE_MODULE_DATA_ACTION, payload: data })
        }
    }
}


export const moduleReducer = (state = initialState, action) => {
    const { curModule, moduleList } = state
    switch (action.type) {
        case SELECT_MODULE_ACTION:
            return { ...state, curModule: action.payload }
        case CREATE_MODULE_ACTION:
            moduleList.push(action.payload)
            return {...state, moduleList: [...moduleList] }
        case UPDATE_MODULE_DATA_ACTION:
            const orderIndex = moduleList.findIndex(module => curModule === module)
            if (orderIndex < 0) throw Error('没有当前组件')
            moduleList[orderIndex].data = action.payload
            return {...state, moduleList: [...moduleList] }
        default:
            return state
    }
}
