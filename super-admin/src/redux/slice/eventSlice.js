import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
 const token = window.localStorage.getItem('token');



const createEvent=createAsyncThunk("event/create-event",async(e)=>{
    const createEvent= await axios.post("http://localhost:4001/api/v1/event/create-event",e,{
        headers: {"authorization":`Bearer ${token}`}
    })
      
    return createEvent.data;
  })

  const getEvent=createAsyncThunk("event/get-all-event",async()=>{
    const getEvent= await axios.get("http://localhost:4001/api/v1/event/get-event",{
        headers: {"authorization":`Bearer ${token}`}
    })
    return getEvent.data;
  })
  const deleteEvent=createAsyncThunk("event/delete-event",async(id)=>{
    const deleteEvent= await axios.post("http://localhost:4001/api/v1/event/delete-eventbyid/",id)
    return deleteEvent.data;
  })
  const getEventById=createAsyncThunk("event/get-all-eventbyid",async(id)=>{
    const getEventById= await axios.get("http://localhost:4001/api/v1/event/view-eventbyid/"+id)
    return getEventById.data;
  })
  const updateEvent=createAsyncThunk("event/update-event",async(payload)=>{
    const updateEvent= await axios.post("http://localhost:4001/api/v1/event/update-eventbyid",payload)
    return updateEvent.data;
  })


  const eventViewList=createAsyncThunk("event/get-all-event-view-list",async(id)=>{
    const headers={
        "Content-Type": "application/json"
    }
    const eventViewList= await axios.post("http://localhost:4001/api/v1/event/update-event-verified",id )
    return eventViewList.data;
  })

  const eventSlice=createSlice({
    name:'register',
    initialState:{
        isLoading:false,
        isError:false,
        data:null,
        message:""
    },
    extraReducers:(builder)=>{

        builder.addCase(createEvent.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(createEvent.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(createEvent.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });


        builder.addCase(getEvent.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(getEvent.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(getEvent.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        
        builder.addCase(deleteEvent.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(deleteEvent.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(deleteEvent.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });
        
        builder.addCase(getEventById.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(getEventById.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(getEventById.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        builder.addCase(updateEvent.pending,(state,action)=>{
            state.isLoading = true;
        });
        
        builder.addCase(updateEvent.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
        });
        
        builder.addCase(updateEvent.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });


        builder.addCase(eventViewList.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(eventViewList.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(eventViewList.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

    }
})

export {createEvent,getEvent,deleteEvent,getEventById,updateEvent,eventViewList}

export default eventSlice.reducer;