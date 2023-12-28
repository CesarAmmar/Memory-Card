import {configureStore} from '@reduxjs/toolkit';
import CardsReducer from './Reducers/CardsSlice';

export const store =configureStore({
    reducer:{
        cards:CardsReducer,
    },
})