import React from 'react'
import { storiesOf } from '@storybook/react'

import TeamMember from '.'

storiesOf('TeamMember', module)
  .add('index', () => (
    <TeamMember
        name="Mikko Häkkinen"
        title="Main Organizer"
        social={{
          twitter: 'mikkohakkinen',
          linkedin: 'https://linkedin.com/in/mikkohakkinen'
        }}
      />
  ))
  .add('no social networks', () => (
    <TeamMember
        name="Mikko Häkkinen"
        title="Main Organizer"
      />
  ))
