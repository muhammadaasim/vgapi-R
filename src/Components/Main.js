import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import ff7 from '../assets/ff7.jpg'
import {
  getGames,
  getUpcomingGames,
  getPopularGames,
  getGameDetails,
  searchGame
} from '../apiServices/games'

export default function Main () {
  const [games, setGames] = useState([])
  const [upComingGames, setUpComingGames] = useState([])
  const [popularGames, setPopularGames] = useState([])
  useEffect(async () => {
    const res = await getGames()
    const { data } = await getUpcomingGames()
    setUpComingGames(data.results)
    const pgames = await getPopularGames()
    setGames(res.data)
    setPopularGames(pgames.data.results)
  }, [])
  const month = new Array()
  month[0] = 'Jan'
  month[1] = 'Feb'
  month[2] = 'Mar'
  month[3] = 'Apr'
  month[4] = 'May'
  month[5] = 'Jun'
  month[6] = 'Jul'
  month[7] = 'Aug'
  month[8] = 'Sep'
  month[9] = 'Oct'
  month[10] = 'Nov'
  month[11] = 'Dec'
  return (
    <div className='container mx-auto px-4'>
      <h2 className='text-blue-500 uppercase tracking-wide font-semibold'>
        Most recent games
      </h2>

      <div className='popular-games text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-12 border-b border-gray-800 pb-16'>
        {games &&
          games?.results?.map(d => {
            return (
              <div className='game mt-8'>
                <div className='relative inline-block card-size'>
                  <Link to={`/singlegame/${d.id}`}>
                    <div className='card-img'>
                      <img
                        src={d.background_image}
                        alt={d.name}
                        className='hover:opacity-75 transition ease-in-out duration-150 img-size'
                      />
                      <div className='absolute percentage-box  w-16 h-16 bg-gray-800 rounded-full'>
                        <div className='font-semibold text-xs flex justify-center items-center h-full'>
                          {/* 80% */}
                          {d.metacritic}%
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/singlegame/${d.id}`}
                    className='block text-base font-semibold leading-tight hover:text-gray-400 mt-9'
                  >
                    {d?.name}
                  </Link>
                  <div className='text-gray-400 mt-1'>
                    {d?.platforms?.map((os, i, arr) => {
                      if (arr.length - 1 === i) {
                        return <span> {os.platform.name}</span>
                      } else {
                        return <span> {os.platform.name},</span>
                      }
                    })}
                  </div>
                </div>
              </div>
            )
          })}
      </div>

      {/* end popular-games  */}
      <div className='flex flex-col lg:flex-row my-10'>
        <div className='recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32'>
          <h2 className='text-blue-500 uppercase tracking-wide font-semibold'>
            Popular Games
          </h2>
          <div className='recently-reviewed-container space-y-12 mt-8'>
            {popularGames &&
              popularGames.map(game => {
                return (
                  <div className='game bg-gray-800 rounded-lg shadow-md flex px-6 py-6'>
                    <div className=''>
                      <div className='relative flex-none'>
                        <Link to={`/singlegame/${game.id}`}>
                          <div className='popular-card-img'>
                            <img
                              src={game.background_image}
                              alt={game.name}
                              className='hover:opacity-75 transition ease-in-out duration-150'
                              style={{ height: '100%', width: '100%' }}
                            />
                          </div>
                        </Link>
                        <div className='absolute -bottom-2 -right-5  w-16 h-16 bg-gray-800 rounded-full'>
                          <div className='font-semibold text-xs flex justify-center items-center h-full'>
                            {game.metacritic ? `${game.metacritic}%` : `N/A`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to={`/singlegame/${game.id}`}>
                      <div className='ml-6 lg:ml-12'>
                        <Link to={`/singlegame/${game.id}`}>{game.name}</Link>

                        <div className='text-gray-400 mt-1'>
                          {' '}
                          {game?.platforms?.map((os, i, arr) => {
                            if (arr.length - 1 === i) {
                              return <span> {os.platform.name}</span>
                            } else {
                              return <span> {os.platform.name},</span>
                            }
                          })}
                        </div>
                        <Description id={game.id} />
                      </div>
                    </Link>
                  </div>
                )
              })}{' '}
          </div>
        </div>
        <div className='most-anticipated lg:w-1/4 mt-12 lg:mt-0'>
          <h2 className='text-blue-500 uppercase tracking-wide font-semibold'>
            Upcoming Games
          </h2>
          <div className='most-anticipated-container space-y-10 mt-8'>
            {upComingGames.map(game => {
              const date = new Date(game?.released)
              return (
                <div className='game flex'>
                  <Link to={`/singlegame/${game.id}`}>
                    <div className='upcoming-img-box'>
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className='hover:opacity-75 upcoming-img transition ease-in-out duration-150'
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </Link>

                  <div className='ml-4'>
                    <Link to={`/singlegame/${game.id}`}>{game.name}</Link>

                    <div className='text-gray-400 text-sm mt-1'>
                      {`${
                        month[date?.getMonth()]
                      } ${date.getDate()} ${date.getFullYear()} `}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
const Description = ({ id }) => {
  const [gdata, setGdata] = useState({})
  async function descData () {
    try {
      const { data } = await getGameDetails(id)
      setGdata(data)
    } catch (err) {
      alert(err)
    }
  }
  useEffect(() => {
    descData()
  }, [])
  return (
    <p className='mt-6 text-gray-400 hidden lg:block'>
      {gdata?.description_raw}{' '}
    </p>
  )
}
