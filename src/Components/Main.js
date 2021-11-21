import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import ff7 from '../assets/ff7.jpg'
import alyx from '../assets/alyx.jpg'
import animalcrossing from '../assets/animalcrossing.jpg'
import avengers from '../assets/avengers.jpg'
import cyberpunk from '../assets/cyberpunk.jpg'
import { getGames } from '../apiServices/games'

export default function Main () {
  const [games, setGames] = useState([])
  useEffect(async () => {
    const res = await getGames()
    setGames(res.data)
  }, [])
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
                <div className='relative inline-block'>
                  <Link to={'/singlegame'}>
                    <div className='card-img'>
                      <img
                        src={d.background_image}
                        alt='ff7'
                        className='hover:opacity-75 transition ease-in-out duration-150 img-size'
                      />
                    </div>
                  </Link>
                  <div className='absolute bottom-12 -right-1  w-16 h-16 bg-gray-800 rounded-full'>
                    <div className='font-semibold text-xs flex justify-center items-center h-full'>
                      80%
                    </div>
                  </div>
                  <Link
                    to={'/singlegame'}
                    className='block text-base font-semibold leading-tight hover:text-gray-400 mt-8'
                  >
                    {d?.name}
                  </Link>
                  <div className='text-gray-400 mt-1'>Playstation 4</div>
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
            <div className='game bg-gray-800 rounded-lg shadow-md flex px-6 py-6'>
              <div className='relative flex-none'>
                <Link to={'/singlegame'}>
                  <img
                    src={ff7}
                    alt='ff7'
                    className='hover:opacity-75 transition ease-in-out duration-150'
                  />
                </Link>

                <div className='absolute -bottom-2 -right-5  w-16 h-16 bg-gray-800 rounded-full'>
                  <div className='font-semibold text-xs flex justify-center items-center h-full'>
                    80%
                  </div>
                </div>
              </div>
              <div className='ml-6 lg:ml-12'>
                <Link
                  to={'/singlegame'}
                  className='block text-lg font-semibold leading-tight hover:text-gray-400 mt-4'
                ></Link>

                <div className='text-gray-400 mt-1'>Playstation 4</div>
                <p className='mt-6 text-gray-400 hidden lg:block'>
                  A spectacular re-imagining of one of the most visionary games
                  ever, Final Fantasy VII Remake rebuilds and expands the
                  legendary RPG for today. The first game in this project will
                  be set in the eclectic city of Midgar and presents a fully
                  standalone gaming experience.
                </p>
              </div>
            </div>
            {/* end game */}
            <div className='game bg-gray-800 rounded-lg shadow-md flex px-6 py-6'>
              <div className='relative flex-none'>
                <Link to={'/singlegame'}>
                  <img
                    src={ff7}
                    alt='ff7'
                    className='hover:opacity-75 transition ease-in-out duration-150'
                  />
                </Link>

                <div className='absolute -bottom-2 -right-5  w-16 h-16 bg-gray-800 rounded-full'>
                  <div className='font-semibold text-xs flex justify-center items-center h-full'>
                    80%
                  </div>
                </div>
              </div>
              <div className='ml-6 lg:ml-12'>
                <Link
                  to={'/singlegame'}
                  className='block text-lg font-semibold leading-tight hover:text-gray-400 mt-4'
                ></Link>

                <div className='text-gray-400 mt-1'>Playstation 4</div>
                <p className='mt-6 text-gray-400 hidden lg:block'>
                  A spectacular re-imagining of one of the most visionary games
                  ever, Final Fantasy VII Remake rebuilds and expands the
                  legendary RPG for today. The first game in this project will
                  be set in the eclectic city of Midgar and presents a fully
                  standalone gaming experience.
                </p>
              </div>
            </div>
            {/* end game */}
            <div className='game bg-gray-800 rounded-lg shadow-md flex px-6 py-6'>
              <div className='relative flex-none'>
                <Link to={'/singlegame'}>
                  <img
                    src={ff7}
                    alt='ff7'
                    className='hover:opacity-75 transition ease-in-out duration-150'
                  />
                </Link>

                <div className='absolute -bottom-2 -right-5  w-16 h-16 bg-gray-800 rounded-full'>
                  <div className='font-semibold text-xs flex justify-center items-center h-full'>
                    80%
                  </div>
                </div>
              </div>
              <div className='ml-6 lg:ml-12'>
                <Link
                  to={'/singlegame'}
                  className='block text-lg font-semibold leading-tight hover:text-gray-400 mt-4'
                ></Link>

                <div className='text-gray-400 mt-1'>Playstation 4</div>
                <p className='mt-6 text-gray-400 hidden lg:block'>
                  A spectacular re-imagining of one of the most visionary games
                  ever, Final Fantasy VII Remake rebuilds and expands the
                  legendary RPG for today. The first game in this project will
                  be set in the eclectic city of Midgar and presents a fully
                  standalone gaming experience.
                </p>
              </div>
            </div>
            {/* end game */}
          </div>
        </div>
        <div className='most-anticipated lg:w-1/4 mt-12 lg:mt-0'>
          <h2 className='text-blue-500 uppercase tracking-wide font-semibold'>
            Upcoming Games
          </h2>
          <div className='most-anticipated-container space-y-10 mt-8'>
            <div className='game flex'>
              <Link to={'/singlegame'}>
                <img
                  src={ff7}
                  alt='ff7'
                  className='hover:opacity-75 transition ease-in-out duration-150'
                />
              </Link>

              <div className='ml-4'>
                <Link to={'/singlegame'} className='hover:text-gray-300'>
                  Doom
                </Link>

                <div className='text-gray-400 text-sm mt-1'>Sept 16, 2020</div>
              </div>
            </div>
            <div className='game flex'>
              <Link to={'/singlegame'}>
                <img
                  src={ff7}
                  alt='ff7'
                  className='hover:opacity-75 transition ease-in-out duration-150'
                />
              </Link>

              <div className='ml-4'>
                <Link to={'/singlegame'} className='hover:text-gray-300'>
                  Doom
                </Link>

                <div className='text-gray-400 text-sm mt-1'>Sept 16, 2020</div>
              </div>
            </div>
            <div className='game flex'>
              <Link to={'/singlegame'}>
                <img
                  src={ff7}
                  alt='ff7'
                  className='hover:opacity-75 transition ease-in-out duration-150'
                />
              </Link>

              <div className='ml-4'>
                <Link to={'/singlegame'} className='hover:text-gray-300'>
                  Doom
                </Link>

                <div className='text-gray-400 text-sm mt-1'>Sept 16, 2020</div>
              </div>
            </div>
            <div className='game flex'>
              <Link to={'/singlegame'}>
                <img
                  src={ff7}
                  alt='ff7'
                  className='hover:opacity-75 transition ease-in-out duration-150'
                />
              </Link>

              <div className='ml-4'>
                <Link to={'/singlegame'} className='hover:text-gray-300'>
                  Doom
                </Link>

                <div className='text-gray-400 text-sm mt-1'>Sept 16, 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
