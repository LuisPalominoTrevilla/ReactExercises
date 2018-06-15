import { createStore } from 'redux';
import { Reducer, initialState } from './reduser';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, initialState
    );

    return store;
}