import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postRequest, deleteRequest, loginRequest, logoutRequest } from '../store/meetinglist/actions'
import { Login } from '../components/molecules/Login'

const mapStateToProps = (state) => {
  return {
    state : state.meetinglist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
/*      postRequest : () => {
        dispatch(postRequest())
      },
      deleteRequest : () => {
        dispatch(deleteRequest())
      },*/
      loginRequest : (username, password) => {
        dispatch(loginRequest(username, password))
      },
      logoutRequest : () => {
        dispatch(logoutRequest())
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
