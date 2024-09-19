import { React } from 'react';
import { createStore } from 'redux';
import {Provider,useSelector,useDispatch} from 'react-redux'

function reducer(state,action){
  if(action.type==='up'){
    return {...state,value:state.value+action.step}
  }//기존의 react-redux는 복사를 해야해서 복잡했음
  //console.log(state)
  return state;
}
const initialState={value:0}
const store=createStore(reducer,initialState)//초기값을 두번째 인자에 넣구나
function Counter(){
  const dispatch=useDispatch()
  const count=useSelector(state=>state.value)
  //console.log(count)
  return(
    <div>
      <button onClick={()=>{
        dispatch({type:'up',step:2})
      }}>+</button>{count}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
