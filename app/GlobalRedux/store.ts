import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import userSlice from "./features/user"


// const rootReducer = combineReducers({
//   userSlice: userSlice,
//   // other reducers go here
// });

 export const makeStore =  configureStore({
         reducer: {
            userSlice: userSlice,
        },
    })

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
export default makeStore;

// export const makeStore =  configureStore({
//         reducer: {
//             userClient: userSlice,
//         },
//     })
// Infer the type of makeStore
// export type AppDispatch = typeof makeStore.dispatch
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof makeStore.getState>
// export type AppDispatch = AppStore['dispatch']
