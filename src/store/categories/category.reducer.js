import {CATEGORIES_ACTION_TYPES} from "./category.types";

export const initialsState = {
  categoriesMap: {}
}

export const categoriesReducer = (state = initialsState, action) => {
    switch (action.type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {...state, categoriesMap: action.payload}
        default:
            return state
    }
}
