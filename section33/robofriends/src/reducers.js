import {CHANGE_SEARCH_FIELD} from './constants.js'
const initialState={
  searchfield: ''
}

export const searchRobots=(state=initialState,action={})=>{
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return Object.assign({},state,{searchfield:action.payload})
      //return {...state,searchfield:action.payload} <- this is what the above looks like when destructured
    default:
      return state;
  }
}