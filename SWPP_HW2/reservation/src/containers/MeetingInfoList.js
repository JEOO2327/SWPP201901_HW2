import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postRequest, deleteRequest } from '../store/meetinglist/actions'
import { MeetingInfoList } from '../components/molecules/MeetingInfoList'


const mapStateToProps = (state) => {
  return {
    state : state.meetinglist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
        postRequest : (sinceWhen, tilWhen) => {
        dispatch(postRequest(sinceWhen, tilWhen))
      },



      deleteRequest : (id) => {
        dispatch(deleteRequest(id))
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingInfoList)
