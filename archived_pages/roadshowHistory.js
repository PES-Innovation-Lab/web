import React, { useEffect, useState } from 'react'
import LayoutAlt from '../components/LayoutAlt'
import Timeline from '../components/Timeline'
import timelineData from '../public/data/events/hashcode.json'

function RoadshowHistory() {
    const [data, setData] = useState({ timeline: [] })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('data/events/hashcode.json')
            if ((await result.status) !== 200) {
                alert('API Error. Try Again later')
            } else {
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
        transition: 'ease 0.1s',
    }

    return (
        <>
            <LayoutAlt title={'PIL | Roadshow'}>
                <div className="container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
                    <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
                        <p className="mb-2 text-3xl font-semibold leading-normal text-lab-green md:text-4xl md:leading-relaxed">
                            Roadshow's History
                        </p>
                        <p className="mb-4 text-sm text-gray-50 md:text-base">
                            PIL's Flagship event where all the interns showcase
                            their projects
                        </p>
                    </div>
                    <div className="sticky ml-0 md:ml-12 lg:w-2/3">
                        <div className="container mx-auto h-full w-full">
                            <div className="wrap relative h-full overflow-hidden p-4">
                                <div
                                    className=" absolute left-1/2 w-[2px] bg-gradient-to-b from-transparent to-lab-green"
                                    style={style}
                                ></div>
                                {timelineData.map((event, index) => (
                                    <Timeline
                                        date={event.year}
                                        title={event.event_name}
                                        sponsors={event.sponsor_text}
                                        alignment={
                                            index % 2 === 0 ? 'right' : 'left'
                                        }
                                    />
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
