import { configureStore } from "@reduxjs/toolkit";
import eventCategorySlice from "./slice/eventCategorySlice";
import categoryWiseEvent from "./slice/categoryWiseEvent";



const store=configureStore({
    reducer:{
        eventCategory:eventCategorySlice,
        eventWiseCategory:categoryWiseEvent,


    }
})
export default store;