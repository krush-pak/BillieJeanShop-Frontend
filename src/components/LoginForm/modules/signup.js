import response from 'utils/services/response-handler'
import request from 'utils/services/request-builder'
import auth from 'utils/services/auth'
import tracking from 'utils/tracking/tracking'
import analytics from 'utils/tracking/analytics'
import { setUser } from 'store/global-reducers/user-reducer'

// ------------------------------------
// Constants
// ------------------------------------
export const SEND_FORM = 'SIGNUP_STEP_1_SEND_FORM'

// ------------------------------------
// Actions
// ------------------------------------
export const sendForm = formData => (dispatch, getState) => (
  response(
    SEND_FORM,
    request('ozean12_api_v1_user_postitem', {}, {
      method: 'POST',
      body: JSON.stringify({ user_create: formData })
    })
  ).then((action) => {
    dispatch(action)
    dispatch(setUser(action.payload.data))
    tracking.identify(action.payload.data)
    analytics.registrationFlow.accountCreated(action.payload.data)
  })
)

export const actions = {
  sendForm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEND_FORM]: (state, action) => {
    auth.login(action.payload.meta['api-key'])
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}
export default function listReducer (state = initialState, action) {
  if (action.error) return state

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
