import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"


export const userRegister = createAsyncThunk("user/register",async({user})=> {
    console.log(user)
    try {
        let response = await axios.post("http://localhost:5000/user/register",user);
  
        return await response?.data;
    } catch (error) {
        console.log(error);
    }
});


export const userLogin = createAsyncThunk("user/login", async (user) => {
    try {
      let response = await axios.post("http://localhost:5000/user/login", user);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });

    

    export const userCurrent = createAsyncThunk("user/current",async()=> {
    try {
        let response = await axios.get("http://localhost:5000/user/current",{headers:{Authorization:localStorage.getItem("token")
    },
});
  
        return await response;
    } catch (error) {
        console.log(error);
    }
    
});



const initialState = {
    user: {},
    status: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers:{
    [userRegister.pending]:(state)=>{
        state.status="pending";
    },

    [userRegister.fulfilled]:(state,action)=>{
        state.status="succes";
        state.user=action.payload?.data?.newUserToken;
        localStorage.setItem("token",action.payload?.token)
  },

  [userRegister.rejected]:(state)=>{
    state.status="fail";
},

[userLogin.pending]:(state)=>{
    state.status="pending";
},

[userLogin.fulfilled]: (state, action) => {
    state.status = "success";
   
    state.user = action.payload.user;
    localStorage.setItem("token", action.payload.token);
},
[userLogin.rejected]:(state)=>{
state.status="fail";
},

[userCurrent.pending]:(state)=>{
    state.status="pending";
},

[userCurrent.fulfilled]:(state,action)=>{
    state.status="succes";
    state.user=action.payload.data.user;
    
},

[userCurrent.rejected]:(state)=>{
state.status="fail";
},

}});



// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = userSlice.actions

export const {logout } = userSlice.actions
export default userSlice.reducer;
