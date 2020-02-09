import React, { ChangeEvent, useState } from 'react'
import { TextField, CircularProgress, TextFieldProps } from '@material-ui/core'
import { Autocomplete, AutocompleteProps } from '@material-ui/lab'

export interface ComboboxProps<T extends {}>
  extends Omit<AutocompleteProps, 'options' | 'getOptionLabel' | 'value' | 'onChange' | 'renderInput'> {
  loading: boolean
  options: T[]
  labelProperty: keyof T
  idProperty: keyof T
  value?: T[ComboboxProps<T>['idProperty']]
  label: string
  name?: TextFieldProps['name']
  onChange?: (e: ChangeEvent<{}>, value: ComboboxProps<T>['value']) => void
}

export const Combobox = <T extends {}>({
  loading,
  options,
  labelProperty,
  idProperty,
  value,
  label,
  name,
  onChange,
  ...autocompleteProps
}: ComboboxProps<T>) => {
  const [selected, setSelected] = useState(value)

  const emptyValue = { [idProperty]: null, [labelProperty]: '' }
  const selectedItem = (selected && options.find(option => option[idProperty] === selected)) || emptyValue

  const handleChange = (event: ChangeEvent<{}>, value: T) => {
    const selectedId = value?.[idProperty]
    setSelected(selectedId)
    onChange?.(event, selectedId)
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      options={Object.values(options)}
      getOptionLabel={option => option[labelProperty]}
      value={selectedItem}
      onChange={handleChange}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          name={name}
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}
