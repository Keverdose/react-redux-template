import { create } from "apisauce"
import * as qs from "query-string"

const api = create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  paramsSerializer: (params: any) =>
    qs.stringify(params, {
      arrayFormat: "none"
    })
})

export default api
