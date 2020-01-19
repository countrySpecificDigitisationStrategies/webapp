import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core'

interface CheckboxProps extends MuiCheckboxProps {
  label?: FormControlLabelProps['label']
  value?: MuiCheckboxProps['checked']
}

export const Checkbox = ({ label, value, checked, ...props }: CheckboxProps) => (
  <FormControlLabel control={<MuiCheckbox color="primary" checked={value || checked} {...props} />} label={label} />
)
