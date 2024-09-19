import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({//인자로 넣을때 속성명은 중요,순서는 중요x
  name:'counter',//dispatch할때 
  initialState:{value:0},
  reducers:{
    up:(state,action)=>{
      //console.log(action) !action.payload
      state.value=state.value+action.payload//복사 할 필요 없음
    }
  }
})//slice는 store의 조각이라고 생각하면 편함

export default counterSlice;
export const {up}=counterSlice.actions;