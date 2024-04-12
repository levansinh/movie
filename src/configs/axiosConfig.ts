import axios, { AxiosInstance } from 'axios'
import envConfig from './configs'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export default new Http().instance
