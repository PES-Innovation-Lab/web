'use client'

import { useEffect, useState } from 'react'
import membersData from '../../public/data/members.json'
import MemberCard from '../../components/MemberCard'
import LayoutAlt from '../../components/LayoutAlt'

function Members() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [showYears, setShowYears] = useState(false)
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
  const yearElementsMd = years.map((year, ind) => {
    return (
      <button
        key={ind}
        onClick={() => setCurrentYear(year)}
        className={`${year == currentYear ? 'font-bold text-lab-green' : ''}`}
      >
        {year}
      </button>
    )
  })
  const [data, setData] = useState({ members: [] })
  const [isDataLoaded, setDataLoaded] = useState(false)
  useEffect(() => {
    const fetch = () => {
      const output = membersData[currentYear.toString()].members
      setData({ members: output })
      setDataLoaded(true)
    }
    fetch()
  }, [currentYear])

  return (
    <>
      <div className="mt-10 flex flex-col gap-10 px-12 pb-20 pt-20">
        <div className="flex items-center justify-between">
          <div className="font-martian-mono md:text-4xl text-3xl text-lab-green">
            MEMBERS
          </div>
          <div className="gap-4 rounded-md border-2 border-lab-green p-2 text-lg text-gray-400 md:flex hidden">
            {yearElementsMd}
          </div>
          <div className="relative md:hidden">
            <div className="flex gap-4 items-center rounded-md border-2 border-lab-green p-2 text-lg text-gray-400 cursor-pointer">
              <button
                className="text-gray-400 text-xs px-4 py-1"
                onClick={() => setShowYears(!showYears)}
              >
                {currentYear}
              </button>
            </div>
            {showYears && (
              <div className="absolute left-0 right-0 mt-2 bg-black shadow-lg rounded-md border-2 border-lab-green z-20 transition-all duration-300 ease-in-out max-h-48 overflow-y-auto">
                {years.map((year, ind) => (
                  <button
                    key={ind}
                    onClick={() => {
                      setCurrentYear(year);
                      setShowYears(false);
                    }}
                    className={`block w-full text-center py-2 text-xs ${year === currentYear ? 'text-green-600' : 'text-gray-400'} hover:bg-gray-100`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-neutral-1000 flex min-h-screen items-center justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {isDataLoaded ? data.members.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                pfp={
                  member.picture_url ||
                  './images/members/unknown.png'
                }
                course={member.branch}
                batch={member.grad_batch}
                linkedin={member.linkedin}
                gmail={member.email}
                github={member.github}
              />
            )) : <></>}
          </div>
        </div>
      </div>
    </>
  )
}
export default Members
