import { configureStore, } from "@reduxjs/toolkit";
import userSlice from "./features/user"


 export const makeStore =  configureStore({
         reducer: {
            userSlice: userSlice,
        },
    })

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
export default makeStore;

