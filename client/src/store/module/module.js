const initialState = {
    curModuleComponent: null,
    moduleComponentList: []
}

export const STORE_MODULE_SPACE = 'moduleReducer'
export const SELECT_MODULE = 'SELECT_MODULE'
export const ADD_MODULE = 'ADD_MODULE'

export const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_MODULE:
            return { ...state, curModuleComponent: action.payload }
        case ADD_MODULE:
            const { moduleComponentList } = state
            moduleComponentList.push(action.payload)
            return {...state, moduleComponentList: [...moduleComponentList] }
        default:
            return state
    }
}
