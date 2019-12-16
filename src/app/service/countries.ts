import { Country } from 'features/countrySelection/store/types'

const mockSelectedCountry: Country = {
  id: 'south-africa',
  name: 'South Africa',
  flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197562.svg',
  flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555604.svg',
}

const mockCountries: Country[] = [
  {
    id: 'south-africa',
    name: 'South Africa',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197562.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555604.svg',
  },
  {
    id: 'afghanistan',
    name: 'Afghanistan',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197515.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555557.svg',
  },
  {
    id: 'mali',
    name: 'Mali',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197429.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555472.svg',
  },
  {
    id: 'algeria',
    name: 'Algeria',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197511.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555553.svg',
  },
  {
    id: 'ghana',
    name: 'Ghana',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197381.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555424.svg',
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197611.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555653.svg',
  },
  {
    id: 'iraq',
    name: 'Iraq',
    flagCircleURL: 'https://image.flaticon.com/icons/svg/197/197630.svg',
    flagRectangleURL: 'https://image.flaticon.com/icons/svg/555/555672.svg',
  },
]

// export const getSelectedCountry = (): Country | null => null

// export const getCountries = (): Country[] => mockCountries
