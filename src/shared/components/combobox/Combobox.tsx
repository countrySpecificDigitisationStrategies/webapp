import React, { useState } from 'react'
import { TextField, CircularProgress } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

interface ComboboxProps<T extends {}> {
  loading: boolean
  options: T[]
  labelProperty: keyof T
  idProperty: keyof T
  initialValue?: T[ComboboxProps<T>['idProperty']]
  label: string
}

export const Combobox = <T extends {}>({
  loading,
  options,
  labelProperty,
  idProperty,
  initialValue,
  label,
}: ComboboxProps<T>) => {
  const [selected, setSelected] = useState(initialValue)

  const emptyValue = { [idProperty]: null, [labelProperty]: '' }
  const selectedItem = (selected && options.find(option => option[idProperty] === selected)) || emptyValue

  return (
    <Autocomplete
      options={Object.values(options)}
      getOptionLabel={option => option[labelProperty]}
      value={selectedItem}
      onChange={(_event, value) => setSelected(value?.[idProperty])}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
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
