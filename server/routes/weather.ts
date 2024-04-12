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

export default router

//   https://www.meteosource.com/api/v1/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=YOUR-API-KEY
