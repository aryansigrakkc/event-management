import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./slice/companySlice";
import eventSlice from "./slice/eventSlice";
import userSlice from "./slice/userSlice";




const store=configureStore({
    reducer:{
      company:companySlice,
      event:eventSlice,
      user:userSlice

}
})
export default store;