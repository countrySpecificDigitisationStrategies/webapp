interface ApiErrorProps {
  detail: string
  name: string
  code: string | number
}

export class ApiError extends Error {
  detail: ApiErrorProps['detail']
  name: ApiErrorProps['name']
  code: ApiErrorProps['code']

  constructor({ code, name, detail }: ApiErrorProps) {
    super(detail)
    this.detail = detail //Human readable error message
    this.name = name //HTTP Error Response
    this.code = code //HTTP Error Code
  }
}
