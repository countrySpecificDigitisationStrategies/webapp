import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarProps, Tooltip } from '@material-ui/core'
import { Language as LanguageIcon } from '@material-ui/icons'

import { Country, getCountry } from 'features/countries/store'
import { useCountryData } from 'features/countries/components'

interface IconProps extends Omit<AvatarProps, 'id'> {
  id: Country['id']
}

export const Icon = ({ id, ...avatarProps }: IconProps) => {
  useCountryData()
  const country = useSelector(getCountry(id))

  return country ? (
    <Tooltip title={country.name}>
      <Avatar alt={country.name} src={country.flagCircle || country.flagRectangle || country.flag} {...avatarProps} />
    </Tooltip>
  ) : (
    <Tooltip title="No country">
      <Avatar {...avatarProps}>
        <LanguageIcon />
      </Avatar>
    </Tooltip>
  )
}
