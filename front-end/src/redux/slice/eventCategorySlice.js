import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const getEventCategory=createAsyncThunk("eventCategory/get-all-eventCategory",async()=>{
    const getEventCategory= await axios.get("http://localhost:4001/api/v1/category/get-category")
    return getEventCategory.data;
    })





    const eventCategorySlice=createSlice({
        name:'register',
        initialState:{
            isLoading:false,
            isError:false,
            data:null,
            message:""
        },
        extraReducers:(builder)=>{
            builder.addCase(getEventCategory.pending,(state,action)=>{
                state.isLoading = true;
    
            });
    
            builder.addCase(getEventCategory.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.isLoading=false;
            });
            builder.addCase(getEventCategory.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
            });

        }
    })

    export {getEventCategory}
export default eventCategorySlice.reducer;