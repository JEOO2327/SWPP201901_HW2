import React from 'react'
import { storiesOf } from '@kadira/storybook'
import meeting from '.'

storiesOf('meeting', module)
  .add('default', () => (
    <meeting>Hello</meeting>
  ))
  .add('reverse', () => (
    <meeting reverse>Hello</meeting>
  ))
