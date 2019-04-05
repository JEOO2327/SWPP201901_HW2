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
      margin : '8px'
    };



export const Login = ({ state, postRequest, loginRequest, logoutRequest }) => {

  let username, password
  if (state.token === null) {
     return (
    	<div>
        <div>
          <div>
            <h2>Login :</h2>
            <input id="username_field" ref={val => {username = val;}}/>
          </div>
          <div>
            <h2>PW :</h2>
            <input id="password_field" ref={val => {password = val;}}/>
          </div>
        </div>
        <div></div>
        <button type="submit" onClick={() => loginRequest(username.value, password.value)}> 로그인 </button>
  		</div>
    )
  }
  else {
    username = localStorage.getItem("username")
    return (
      <div>
        <h1><b> Username : {username} </b></h1>
        <button type="submit" onClick={() => logoutRequest()}> 로그아웃 </button>
      </div>
    )
  }
}

Login.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Login
