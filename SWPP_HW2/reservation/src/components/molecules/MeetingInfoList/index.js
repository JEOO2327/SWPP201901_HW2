import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { MeetingInfo } from '../MeetingInfo'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const style = {
      border : '1px solid black',
      padding : '8px',
      margin : '8px',
    };

const reserveStyle = {
      border : '2px solid black',
      padding : '4px',
      margin : '4px'
    };


export const MeetingInfoList = ({ state, postRequest, deleteRequest }) => {


//    console.log("state: " + state.meetingList)
    let sinceWhen,tilWhen
    if (localStorage.getItem("token") !== null) {
      const meetingList = state.meetingList

      if(meetingList !== null)
      {
        let meetingInfoList = JSON.parse(meetingList)
  //      console.log("meetingList molecule, meetingInfoList : " + meetingInfoList)
  //      console.log("maping" + meetingInfoList.map(meeting => meeting.sinceWhen ) )
        const list = meetingInfoList.map( (meeting) => (<div key = {meeting.id}>
                                                          < MeetingInfo sinceWhen = {meeting.sinceWhen}
                                                                        tilWhen = {meeting.tilWhen}
                                                                        id = {meeting.id}
                                                                        created = {meeting.created}
                                                                        user = {meeting.user}
                                                                        deleteRequest = {deleteRequest}/>
                                                        </div>) )
    //    console.log(list)
        return (
          <div style = {style}>
            <div style = {reserveStyle}>
              <div>
                <div>
                  <h2>sinceWhen :</h2>
                  <input type = "datetime-local" id="sinceWhen_field" ref={val => {sinceWhen = val;}}/>
                </div>
                <div>
                  <h2>tilWhen :</h2>
                  <input type = "datetime-local" id="tilWhen_field" ref={val => {tilWhen = val;}}/>
                </div>
              </div>
              <button type="submit" onClick={() => postRequest(sinceWhen.value, tilWhen.value)}> 예약 </button>
            </div>
            <div>
              <div>
                {list}
              </div>
            </div>
          </div>
        )
      }
      else{
        return(
          <div style = {style}>
            <div style = {reserveStyle}>
              <div>
                <div>
                  <h2>sinceWhen :</h2>
                  <input type = "datetime-local" id="sinceWhen_field" ref={val => {sinceWhen = val;}}/>
                </div>
                <div>
                  <h2>tilWhen :</h2>
                  <input type = "datetime-local" id="tilWhen_field" ref={val => {tilWhen = val;}}/>
                </div>
              </div>
              <button type="submit" onClick={() => postRequest(sinceWhen.value, tilWhen.value)}> 예약 </button>
            </div>
          </div>
        )
      }
    }
    else{
      return (
        <div>
        </div>
      );
    }
}

MeetingInfoList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default MeetingInfoList
