import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
const token=window.localStorage.getItem('token');


const createCompany=createAsyncThunk("company/create-company",async(e)=>{
    const createCompany= await axios.post("http://localhost:4001/api/v1/company/create-company",e)
    
    return createCompany.data;
  })

  const getCompany=createAsyncThunk("company/get-all-company",async()=>{
    const getCompany= await axios.get("http://localhost:4001/api/v1/company/get-company",{
        headers: {"authorization":`Bearer ${token}`}
    })
     
    return getCompany.data;
  })
  const loginCompany=createAsyncThunk("company/login-company",async(e)=>{
    const loginCompany= await axios.post("http://localhost:4001/api/v1/company/login-company/",e)
    return loginCompany.data;
  })

  const deleteCompany=createAsyncThunk("company/delete-company",async(id)=>{
    const deleteCompany= await axios.post("http://localhost:4001/api/v1/company/delete-companybyid/",id,{
        headers: {"authorization":`Bearer ${token}`}
    })
    return deleteCompany.data;
  })

  const getCompanyById=createAsyncThunk("company/get-all-companybyid",async(id)=>{
    const getCompanyById= await axios.get("http://localhost:4001/api/v1/company/view-companybyid/"+id,{
        headers: {"authorization":`Bearer ${token}`}
    })
    return getCompanyById.data;
  })

  const updateCompany=createAsyncThunk("company/update-company",async(payload)=>{
    const updateCompany= await axios.post("http://localhost:4001/api/v1/company/update-companybyid",payload)
    return updateCompany.data;
  })

  const eventViewListByCompany=createAsyncThunk("company/get-all-event-view-list",async(id)=>{
    const eventViewListByCompany= await axios.get("http://localhost:4001/api/v1/company/event-view-list/"+id)
       
    return eventViewListByCompany.data;
  })

  const verifiedEvent=createAsyncThunk("company/get-all-company-verified",async(obj)=>{
    const verifiedEvent= await axios.post("http://localhost:4001/api/v1/company/event-verifiedbysuper-admin",obj,
      
    )
    return verifiedEvent.data;
})





  const companySlice=createSlice({
    name:'register',
    initialState:{
        isLoading:false,
        isError:false,
        data:null,
        message:""
    },
    extraReducers:(builder)=>{
        
        builder.addCase(createCompany.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(createCompany.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(createCompany.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        builder.addCase(getCompany.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(getCompany.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(getCompany.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });
        builder.addCase(loginCompany.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(loginCompany.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
        });

        builder.addCase(loginCompany.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        builder.addCase(deleteCompany.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(deleteCompany.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message = action.payload.message;
        });

        builder.addCase(deleteCompany.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        builder.addCase(getCompanyById.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(getCompanyById.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(getCompanyById.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });
        builder.addCase(updateCompany.pending,(state,action)=>{
            state.isLoading = true;
        });
        
        builder.addCase(updateCompany.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
        });
        
        builder.addCase(updateCompany.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });


        builder.addCase(eventViewListByCompany.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(eventViewListByCompany.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(eventViewListByCompany.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });

        builder.addCase(verifiedEvent.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(verifiedEvent.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isLoading=false;
        });
        builder.addCase(verifiedEvent.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
        });


        
    }
})
export {createCompany,getCompany,loginCompany,deleteCompany,getCompanyById,updateCompany,eventViewListByCompany,verifiedEvent}
export default companySlice.reducer;