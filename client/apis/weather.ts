import request from 'superagent'
import { Weather } from '../../models/weather'

const rootURL = '/api/v1/weather'

export async function getWeather(): Promise<Weather> {
  const response = await request.get(`${rootURL}`)
  return response.body
}

export async function getLocation(): Promise<any> {
  const response = await request.get(`${rootURL}/location`)
  return response.body
}
