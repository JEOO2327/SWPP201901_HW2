import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const meeting = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

meeting.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

meeting.defaultProps = {
  palette: 'grayscale',
}

export default meeting
