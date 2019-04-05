import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const style = {
      border : '1px solid black',
      padding : '8px',
      margin : '8px',
      background : '#e3fafc'

    };



export const MeetingInfo = ({ state, sinceWhen, tilWhen, id, deleteRequest, created, user }) => {

  
  return (
    <div style = {style}>
      <div>sinceWhen : {sinceWhen}</div>
      <div>tilWhen : {tilWhen}</div>
      <div>id : {id}</div>
      <div>created : {created}</div>
      <div>username : {user}</div>
      <button onClick = {() =>deleteRequest(id)}>삭제</button>
    </div>
  )
}

MeetingInfo.propTypes = {
  sinceWhen : PropTypes.string.isRequired,
  tilWhen : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default MeetingInfo
