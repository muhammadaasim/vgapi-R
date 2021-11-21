import {api} from './api'

export const getGames = async () => {
  try {
    const res = await api.get(
      `games?key=497f361e3bdc4f069030a213e8371ee0&platforms=18,1,7`
    )
    console.log('api response',res)
    return res;
  } catch (err) {
    return {
      error: err
    }
  }
}
