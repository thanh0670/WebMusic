import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
const initialState = {
    value: 0,
    data:[],
    status:"idle",
    error:""
}


export const dataAdmin = createAsyncThunk(
  'API/getdata rom database',
  async () => {
    try {
      const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      };
      const response = await axios.get("http://localhost:8000/api/admin/getValue", config);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  },
)



export const valueAdminSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    
    },
    extraReducers:(builder)=>{
      builder
        .addCase(dataAdmin.pending,(state,action)=>{
          state.status = "loading";
        })
        .addCase(dataAdmin.fulfilled,(state,action)=>{
          state.status = "successed";
          state.response = action.payload;
        })
        .addCase(dataAdmin.rejected,(state,action)=>{
          state.status = "failed";
          state.error = action.error;
        })
    },
})

// Action creators are generated for each case reducer function
// export const { } = currentSlice.actions

export default valueAdminSlice.reducer