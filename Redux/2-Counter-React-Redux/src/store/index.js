import {createStore} from 'redux';
const INITIAL_VALUE = {
  privacy: false,
  counter: 0
};

const counterReducer =(store = INITIAL_VALUE,action)=>{
 
let newstore = store;
if(action.type==='INCREMENT'){
newstore = {...store,counter: store.counter + 1};
}else if(action.type==='DECREMENT'){
  newstore = {...store,counter: store.counter - 1};
}else if(action.type==='ADD'){
  newstore = {counter: store.counter + Number(action.payload.num)};
}else if(action.type==='SUBTRACT'){
  newstore = {...store,counter: store.counter - Number(action.payload.num)};
}else if(action.type==='PRIVACY_TOGGLE'){
  newstore = {...store, privacy: !store.privacy};
}

return newstore;
}


const counterStore = createStore(counterReducer);
export default counterStore;