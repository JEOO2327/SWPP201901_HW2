import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { login } from 'components'

storiesOf('login', module)
  .add('default', () => (
    <login>Hello</login>
  ))
  .add('reverse', () => (
    <login reverse>Hello</login>
  ))
