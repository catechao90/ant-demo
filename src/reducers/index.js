import { combineReducers } from 'redux'
import { LOG_IN, LOG_OUT } from '@/actions'

function setAuth(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, ...state, {
          auth: action.auth
        })
    case LOG_OUT:
      return Object.assign({}, ...state, {
          auth: action.auth
        })
    default:
      return state
  }
}

const appReducers = combineReducers({
  setAuth
})

export default appReducers