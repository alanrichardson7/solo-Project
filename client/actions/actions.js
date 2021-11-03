import * as types from './actionTypes';

export const findCompositionActionCreator = (userSearch) => ({
    type: types.GET_COMPOSITION,
    payload: userSearch,
});