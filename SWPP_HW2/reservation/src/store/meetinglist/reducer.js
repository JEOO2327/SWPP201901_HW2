import { initialState } from './selectors'


const meetinglist_reducer = (state = initialState, action) => {
  switch (action.type) {


      //Login,Logout reducer
    case 'LOGIN_SUCCESS' :
    //  console.log(action);
      console.log('Login Success!');
  //    console.log('username' + action.username);
//      console.log('password' + action.password);

      localStorage.setItem("meetingList", JSON.stringify(action.meetingList)) //string 안에 배열이 들어있는 형태로 저장
      localStorage.setItem("username", action.username)
      localStorage.setItem("password", action.password)
      localStorage.setItem("token", new Buffer(`${action.username}:${action.password}`).toString('base64'))
//      console.log("reducer login success meetinglist : " + action.meetingList)
      return {
        username : action.username,
        meetingList : JSON.stringify(action.meetingList),
        token : new Buffer(`${action.username}:${action.password}`).toString('base64')
      }

    case 'LOGIN_FAIL' :
      console.log('reducer : LogIn Fail!')
      localStorage.removeItem("token")
      localStorage.removeItem("meetingList")
      localStorage.removeItem("username")
      localStorage.removeItem("password")
      return {
        meetingList : null,
        username : null,
        token : null,
      };

    case 'LOGOUT_REQUEST' :
      console.log('reducer : logOut Request!');
      localStorage.removeItem("username")
      localStorage.removeItem("token")
      localStorage.removeItem("password")
      localStorage.removeItem("meetingList")

      return{
        username : null,
        meetingList : null,
        token : null,
      }

    //Post reducer
    case 'POST_SUCCESS' :

//      console.log("state. meeting_parse : " + JSON.parse(state.meetingList))
//      console.log("PO_SUC action.meetingList : " + action.meetingInfoList)
//      console.log("PO_SUC action.meetingList_parse : " + JSON.parse(action.meetingInfoList))

      localStorage.setItem("meetingList",JSON.stringify(JSON.parse(state.meetingList).concat(action.meetingInfoList))); //string 안에 배열이 들어잇는형태로 저장
  //    console.log("after POST_SUCCESS local.meetingList : " + localStorage.getItem("meetingList"))
      return {
       ...state,
        meetingList : localStorage.getItem("meetingList"),
      }

    case 'POST_FAIL' :
      console.log('reducer : Post Fail!')
      return {
        ...state,
      }


    //delete reducer
    case 'DELETE_SUCCESS' :
        const newList = JSON.parse(localStorage.getItem("meetingList"));
    //    console.log("newlist : " + newList)
  //      console.log("action id : " + action.id)
        localStorage.setItem("meetingList", JSON.stringify(newList.filter(meeting => meeting.id !== action.id)))

        console.log("reducer delete_succ - list : " +  JSON.stringify(newList.filter(meeting =>
           meeting.id !== action.id
         )))

      return {
        ...state,
        meetingList : localStorage.getItem("meetingList")
      };

    default :
        return state
  }
  //function for login
}

export default meetinglist_reducer
