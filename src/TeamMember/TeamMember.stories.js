import React from 'react'
import { storiesOf } from '@storybook/react'

import TeamMember from '.'

storiesOf('TeamMember', module)
  .add('index', () => (
    <TeamMember />
  ))
