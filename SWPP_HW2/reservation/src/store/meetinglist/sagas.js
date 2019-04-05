import { take, put, call, fork, spawn, select } from 'redux-saga/effects'
import api from 'services/api'
import { initialState } from './selectors'
import { postSuccess, postRequest, postFail, deleteSuccess, deleteRequest,
  loginSuccess, loginFail, loginRequest, logoutRequest } from 'store/actions'


const url = 'http://18.220.162.221:8000/meetings/'

export function* loginReq(action){
  let name = action.username
  let pwd = action.password
  console.log('sagas : logging in...');
  const hash = new Buffer(`${name}:${pwd}`).toString('base64')
  const response = yield call(fetch, url, {
    method : 'GET',
    headers : {
      'Authorization': `Basic ${hash}`
    }
  })
//  console.log(response)
  const meetingList = yield call([response,response.json]) //JSON 형태
//  console.log("sagas Login json meetingList : " + JSON.stringify(meetingList));
//  let arr = meetingList.map((element) => element.user);
//    console.log("sagas Login json arr : " + arr);
  if( response.ok ) {
    alert('로그인 성공')
    yield put(loginSuccess(name, pwd, meetingList))  //put : saga에서 store로 날리는거
  } else {
    alert('로그인 실패')
    yield put(loginFail())
  }
}

export function* postReq(action){
  let sinceWhen = action.sinceWhen
  let tilWhen = action.tilWhen
  console.log('sagas : postReq');
  const response = yield call(fetch, url, {
    method : 'POST',
    headers : {
      'Authorization': `Basic ${localStorage.getItem("token")}`,
      'Content-Type' : 'application/json',
    },
    body :
            JSON.stringify({
              sinceWhen : sinceWhen,
              tilWhen : tilWhen
            })
  })
  if( response.ok ){
    alert('포스트 성공')
    const response_data = yield call([response, response.json]);
  //  console.log("sagas POSTREQ response_data : " + response_data)
    yield put(postSuccess(response_data)) //JSON형태의 데이터
  } else{
    alert('포스트 실패')
    yield put(postFail())
  }
}

export function* deleteReq(action){
//  console.log(action)
  let delete_url = url + action.id + "/" // delete할 meeting의 detail url
//  console.log(delete_url)
  const response = yield call(fetch, delete_url, {
                      method : 'DELETE',
                      headers : {
                        'Authorization': `Basic ${localStorage.getItem("token")}`,
                      },
                    })

  if(response.ok){
    alert('삭제 성공')
    yield put(deleteSuccess(action.id))
  }
  else{
    alert('삭제 실패')
  }

}

//login request가 오는것을 catch해서 loginReq로 연결해줌
export function* watchLoginReq(){
  while (true) {
    const action = yield take('LOGIN_REQUEST');
    yield call(loginReq, action)
  }
}

export function* watchPostReq(){
  while(true){
    const action = yield take('POST_REQUEST');
    yield call(postReq, action)
  }
}
export function* watchDeleteReq(){
  while(true){
    const action = yield take('DELETE_REQUEST');
    yield call(deleteReq, action)
  }
}

export default function* () {
  yield fork(watchLoginReq)
  yield fork(watchPostReq)
  yield fork(watchDeleteReq)

}
