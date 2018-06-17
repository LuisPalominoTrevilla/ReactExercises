import * as ActionTypes from './ActionTypes';

export const Promotions = (state  = { isLoading: true,
                                        errMes: null,
                                        promotions:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMes: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMes: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMes: action.payload};

        default:
          return state;
      }
};