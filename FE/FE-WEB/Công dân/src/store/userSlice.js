// store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
  info:{
    cmnd: 0,
    fullname:"", 
    birthday:"",
    country:"", 
    gender:false,
    avatar:"",
    nationality:"",
    folk:"",
    //soHoKhau:0,
    married:false,
    address:"",
    cccd:0,
    id:0,
    email:""
  },
  token:""
};

// Cấu hình slice
export const userSlice = createSlice({
  name: "user",  // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
  initialState,
  // Reducers chứa các hàm xử lý cập nhật state
  reducers: {
    // Hàm có 2 tham số là state hiện tại và action truyền vào
    updateCongDan: (state, action) => {
      // Cập nhật state username với giá trị truyền vào qua action (action.payload)
      // Chạy thử console.log(action) để xem chi tiết giá trị action truyền vào
      state.info.cmnd = action.payload.info.cmnd;
      state.info.fullname = action.payload.info.fullname;
      state.info.birthday = action.payload.info.birthday;
      state.info.country = action.payload.info.country;
      state.info.gender = action.payload.info.gender;

      state.info.avatar = action.payload.info.avatar;
      state.info.nationality= action.payload.info.nationality;
      state.info.folk = action.payload.info.folk;
      //state.info.soHoKhau = action.payload.info.soHoKhau;
      state.info.married = action.payload.info.married; 

      state.info.address = action.payload.info.address;
      state.info.cccd = action.payload.info.cccd;
      state.info.id = action.payload.info.id;
      state.info.email = action.payload.info.email;
    }
  }
});

// Export action ra để sử dụng cho tiện.
export const { updateCongDan } = userSlice.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateUsername()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectCongDan = state => state.user;

// Export reducer để nhúng vào Store
export default userSlice.reducer;