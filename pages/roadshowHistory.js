import React, { useEffect, useState } from 'react'
import LayoutAlt from '../components/LayoutAlt'
import Timeline from '../components/Timeline'
import timelineData from '../public/data/events/hashcode.json';


function RoadshowHistory() {

    const [data, setData] = useState({ timeline: [] })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('data/events/hashcode.json')
            if ((await result.status) !== 200) {
                alert('API Error. Try Again later')
            }
            else {
                const timeline = await result.json()
                setData({ timeline: timeline })
            }
        }

        const fetch = () => {
            const timeline = timelineData
            setData({ timeline: timeline })
        }
        fetch()

    }, [])

    const [scrollPercentage, setScrollPercentage] = useState(0)

    const handleScroll = () => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const percentage = (scrollY / (documentHeight - windowHeight)) * 100
        setScrollPercentage(percentage)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const maxScroll = Math.min(scrollPercentage, 83)

    const style = {
        height: `${maxScroll + 5}%`,
        transition: 'ease 0.1s'
    }

    return (
        <>
            <LayoutAlt title={'PIL | Roadshow'}>
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-lab-green font-semibold">Roadshow's History</p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">PIL's Flagship event where all the interns showcase their projects</p>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-4 h-full">
                                <div className=' w-[2px] left-1/2 absolute bg-gradient-to-b from-transparent to-lab-green' style={style}></div>
                                {timelineData.map((event, index) => (
                                    <Timeline date={event.year} title={event.event_name} sponsors={event.sponsor_text} alignment={index % 2 === 0 ? "right" : "left"} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAlt>
        </>
    )
}

export default RoadshowHistory