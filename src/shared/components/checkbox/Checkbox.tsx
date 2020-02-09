import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
} from '@material-ui/core'

interface CheckboxProps extends Omit<MuiCheckboxProps, 'defaultValue'> {
  label?: FormControlLabelProps['label']
  value?: MuiCheckboxProps['checked'] | string
  error?: boolean
  helperText?: string
}

export const Checkbox = ({ label, value = false, error = false, helperText, ...props }: CheckboxProps) => (
  <FormControl>
    <FormControlLabel control={<MuiCheckbox color="primary" checked={!!value} {...props} />} label={label} />
    {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
  </FormControl>
)
