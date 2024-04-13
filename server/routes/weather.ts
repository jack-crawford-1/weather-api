import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const weatherApiKey = process.env.WEATHER_API_KEY

router.get('/', async (req, res, next) => {
  try {
    const weather = await request.get(
      `https://www.meteosource.com/api/v1/free/point?lat=41S&lon=174E&sections=all&timezone=auto&language=en&units=auto&key=${weatherApiKey}`,
    )

    res.json(weather.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

router.get('/location', async (req, res, next) => {
  try {
    const location = await request.get(
      `https://www.meteosource.com/api/v1/free/nearest_place?lat=41.2924S&lon=174.7787E&key=${weatherApiKey}`,
    )

    res.json(location.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
