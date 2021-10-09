import { newArray } from '../util';

export const ADD_FRAGMENT = 'ADD_FRAGMENT';
export const addFragment = fragment => ({
    type: ADD_FRAGMENT,
    payload: fragment
});

const initState = {
    page: []
}


export const pageReducer = (state = initState, action) => {
    if (action.type === ADD_FRAGMENT) {
        const { payload } = action;
        const { page } = state;
        page.push(payload);
        return { ...state, page: newArray(page) }
    }
    return { ...state };
}