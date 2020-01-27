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
  defaultValue?: MuiCheckboxProps['defaultChecked']
}

export const Checkbox = ({ label, value, checked, defaultValue, ...props }: CheckboxProps) => (
  <FormControlLabel
    control={<MuiCheckbox color="primary" checked={value || checked} defaultChecked={defaultValue} {...props} />}
    label={label}
  />
)
