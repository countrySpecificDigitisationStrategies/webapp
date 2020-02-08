import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core'

interface CheckboxProps extends Omit<MuiCheckboxProps, 'defaultValue'> {
  label?: FormControlLabelProps['label']
  value?: MuiCheckboxProps['checked']
}

export const Checkbox = ({ label, value = false, ...props }: CheckboxProps) => (
  <FormControlLabel control={<MuiCheckbox color="primary" checked={value} {...props} />} label={label} />
)
