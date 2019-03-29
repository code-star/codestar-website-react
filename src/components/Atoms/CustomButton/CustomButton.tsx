import React from 'react'
import { Button } from '@material-ui/core'

// Fixme: this is a workaround for using the material ui button
// with the `to` property. By default this is not supported.
export const CustomButton = (props: any) => <Button {...props} />
