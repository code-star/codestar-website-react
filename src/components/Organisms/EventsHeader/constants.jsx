import React from 'react'

// https://material.io/tools/icons/?style=baseline
import { Edit as EditIcon, Event as EventIcon, Movie as MovieIcon, Portrait as PortraitIcon, Book as BookIcon } from '@material-ui/icons'

export const navButtons = [
  {
    icon: <EventIcon />,
    label: 'events',
    to: 'previous-events',
  },
  {
    icon: <EditIcon />,
    label: 'blog',
    href: 'https://medium.com/codestar-blog',
  },
  {
    icon: <PortraitIcon />,
    label: 'pics',
    to: 'previous-events',
  },
  {
    icon: <MovieIcon />,
    label: 'video',
    to: 'videos',
  },
  {
    icon: <BookIcon />,
    label: 'TRAININGS',
    to: 'trainings',
  },
]
