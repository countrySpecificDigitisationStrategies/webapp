import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core'

interface CheckboxProps {
  label?: FormControlLabelProps['label']
  value?: MuiCheckboxProps['checked']
  name?: MuiCheckboxProps['name']
  onChange?: MuiCheckboxProps['onChange']
}

export const Checkbox = ({ label, value, name, onChange }: CheckboxProps) => (
  <FormControlLabel
    control={<MuiCheckbox name={name} color="primary" checked={value} onChange={onChange} />}
    label={label}
  />
)
