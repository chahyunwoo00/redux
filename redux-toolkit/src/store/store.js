import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store=configureStore({
  reducer:{
    counter:counterSlice.reducer//객체만들때 알아서 생기는 속성
  }
})
export default store;