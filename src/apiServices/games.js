import { api } from './api'
import { GAMES,SCREENSHOTS } from './api_routes'
export const getGames = async () => {
  try {
    return await api.get(
      `${GAMES}?key=${process.env.REACT_APP_API_KEY}&platforms=18,1,7`
    )
  } catch (err) {
    return {
      error: err
    }
  }
}
export const getGameDetails = async id => {
  try {
    return await api.get(`${GAMES}/${id}?key=${process.env.REACT_APP_API_KEY}`)
  } catch (err) {
    return {
      error: err
    }
  }
}
export const getScreenshots = async id => {
  try {
    return await api.get(`${GAMES}/${id}/${SCREENSHOTS}?key=${process.env.REACT_APP_API_KEY}`)
  } catch (err) {
    return {
      error: err
    }
  }
}
