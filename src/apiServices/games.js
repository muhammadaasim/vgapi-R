import { api } from './api'
import { GAMES, SCREENSHOTS } from './api_routes'
const currentDate = date => {
  var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  return [year, month, day].join('-')
}
const nextYear = () => {
  var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear() + 1

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  return [year, month, day].join('-')
}
const lastYear = () => {
  var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear() - 1

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  return [year, month, day].join('-')
}

export const getGames = async () => {
  try {
    return await api.get(
      `${GAMES}?key=${
        process.env.REACT_APP_API_KEY
      }&platforms=18,1,7&dates=${lastYear()},${currentDate()}`
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
    return await api.get(
      `${GAMES}/${id}/${SCREENSHOTS}?key=${process.env.REACT_APP_API_KEY}`
    )
  } catch (err) {
    return {
      error: err
    }
  }
}
export const getUpcomingGames = async () => {
  try {
    return await api.get(
      `${GAMES}?key=${
        process.env.REACT_APP_API_KEY
      }&dates=${currentDate()},${nextYear()}&ordering=-added&page_size=10`
    )
  } catch (err) {
    return {
      error: err
    }
  }
}
// dates=${lastYear},${currentDate}&ordering=-rating
export const getPopularGames = async () => {
  try {
    return await api.get(
      `${GAMES}?key=${
        process.env.REACT_APP_API_KEY
      }&dates=${lastYear()},${currentDate()}&ordering=-rating&page_size=10`
    )
  } catch (err) {
    return {
      error: err
    }
  }
}

export const searchGame = async gamename => {
  try {
    return await api.get(
      `${GAMES}?search=${gamename}&key=${process.env.REACT_APP_API_KEY}`
    )
  } catch (err) {
    return {
      error: err
    }
  }
}
