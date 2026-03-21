import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import themeReducer from '@/shared/model/theme/themeSlice'
import { baseApi } from "@/shared/api/baseApi";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddlewere) => getDefaultMiddlewere().concat(baseApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;