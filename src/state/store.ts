import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;
