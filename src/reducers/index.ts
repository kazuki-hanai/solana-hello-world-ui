import { combineReducers } from '@reduxjs/toolkit';
import { helloWorldReducer } from './helloWorldState';

export const rootReducer = combineReducers({
  helloWorldState: helloWorldReducer
});

export type RootState = ReturnType<typeof rootReducer>;