import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const getUser=createAsyncThunk("user/get-all-user",async()=>{
    const getUser= await axios.get("http://localhost:4001/api/v1/user/get-user")
    return getUser.data;
  })

  const deleteUser=createAsyncThunk("user/delete-user",async(id)=>{
    const deleteUser= await axios.post("http://localhost:4001/api/v1/user/delete-user/",id)
    return deleteUser.data;
  })

  const createUser=createAsyncThunk("user/create-user",async(e)=>{
    const createUser= await axios.post("http://localhost:4001/api/v1/user/create-user",e)
      
    return createUser.data;
  })


  const userSlice=createSlice({
    name:'register',
    initialState:{
        isLoading:false,
        isError:false,
        data:null,
        message:""
    },
    extraReducers:(builder)=>{

        builder.addCase(createUser.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(createUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });


        builder.addCase(getUser.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(getUser.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(getUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        builder.addCase(deleteUser.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });
    }
})

export {getUser,deleteUser,createUser}
export default userSlice.reducer;