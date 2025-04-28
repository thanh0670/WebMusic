import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  audioUrl: '',
  imageUrl: '',
  status: 'idle',
  error: '',
};

// Gửi API PUT update Audio
export const putFiles = createAsyncThunk(
  'dataAdmin/putFiles',
  async ({ id, formData }, { rejectWithValue }) => { // 👈 Truyền id + formData
    const accessToken = localStorage.getItem('MUSIC_ACCESSTOKEN');

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.put(
        `http://localhost:8000/api/admin/updatedAudio/${id}`, // 👈 id gắn trực tiếp vào URL
        formData,
        config
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const resAudioSlice = createSlice({
  name: 'dataAdmin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putFiles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(putFiles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Nếu backend trả đúng payload { song: { url_audio, url_img } }
        const song = action.payload.song;
        state.audioUrl = song?.url_audio || '';
        state.imageUrl = song?.url_img || '';
      })
      .addCase(putFiles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export default resAudioSlice.reducer;
