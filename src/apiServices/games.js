import { api } from './api'
export const getGames = async () => {
  try {
    return await api.get(
      `games?key=${process.env.REACT_APP_API_KEY}&platforms=18,1,7`
    )
  } catch (err) {
    return {
      error: err
    }
  }
}
