import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const getCategoryWiseEvent=createAsyncThunk("categoryWiseEvent/get-all-categoryWiseEvent",async()=>{
    const getCategoryWiseEvent= await axios.get("http://localhost:4001/api/v1/eventt/get-user-event")
    return getCategoryWiseEvent.data;
    })





    const eventWiseCategorySlice=createSlice({
        name:'register',
        initialState:{
            isLoading:false,
            isError:false,
            data:null,
            message:""
        },
        extraReducers:(builder)=>{
            builder.addCase(getCategoryWiseEvent.pending,(state,action)=>{
                state.isLoading = true;
    
            });
    
            builder.addCase(getCategoryWiseEvent.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.isLoading=false;
            });
            builder.addCase(getCategoryWiseEvent.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
            });

        }
    })

    export {getCategoryWiseEvent}
export default eventWiseCategorySlice.reducer;