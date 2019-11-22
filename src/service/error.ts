export class ApiError extends Error {
  detail: string
  name: string
  code: string | number

  constructor({ code, name, detail }) {
    super(detail)
    this.detail = detail //Human readable error message
    this.name = name //HTTP Error Response
    this.code = code //HTTP Error Code
  }
}
