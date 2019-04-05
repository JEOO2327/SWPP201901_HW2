
const POST_SUCCESS = 'POST_SUCCESS';
const POST_FAIL = 'POST_FAIL';
const POST_REQUEST = 'POST_REQUEST';

const DELETE_SUCCESS = 'DELETE_SUCCESS';
const DELETE_REQUEST = 'DELETE_REQUEST';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

let nextMeetingId = 0

export const postSuccess = (meetingInfoList) => ({
  type : POST_SUCCESS,
  meetingInfoList

})
export const postFail = () => ({
  type : POST_FAIL,
})

export const postRequest = (sinceWhen, tilWhen) => ({
  type : POST_REQUEST,
  sinceWhen,
  tilWhen,
})

export const deleteSuccess = (id) => ({
  type : DELETE_SUCCESS,
  id
})
export const deleteRequest = (id) => ({
  type : DELETE_REQUEST,
  id
})

export const loginSuccess = (username, password, meetingList) => ({
  type : LOGIN_SUCCESS,
  username,
  password,
  token :  new Buffer(`${username}:${password}`).toString('base64'),
  meetingList : meetingList
})
export const loginFail = () => ({
  type : LOGIN_FAIL
})
export const loginRequest = (username, password) => ({
  type : LOGIN_REQUEST,
  username,
  password
})
export const logoutRequest = () => ({
  type : LOGOUT_REQUEST,
})
