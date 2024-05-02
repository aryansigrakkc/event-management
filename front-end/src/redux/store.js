import { configureStore } from "@reduxjs/toolkit";
import eventCategorySlice from "./slice/eventCategorySlice";



const store=configureStore({
    reducer:{
        eventCategory:eventCategorySlice,


    }
})
export default store;