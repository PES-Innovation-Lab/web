import React, { useEffect, useState } from 'react'
import LayoutAlt from '../components/LayoutAlt'
import Timeline from '../components/Timeline'

function History() {

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

	const maxScroll = Math.min(scrollPercentage, 80)

	const style = {
		height: `${maxScroll + 5}%`,
		transition: 'ease 0.1s'
	}

	return (
		<>
			<LayoutAlt title={'PIL | History'}>
				<div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
					<div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
						<p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-lab-green font-semibold">The History of PIL</p>
						<p className="text-sm md:text-base text-gray-50 mb-4">Walk through the events that forged PIL into what it is today.</p>
					</div>
					<div className="ml-0 md:ml-12 lg:w-2/3 sticky">
						<div className="container mx-auto w-full h-full">
							<div className="relative wrap overflow-hidden p-4 h-full">
								<div className=' w-[2px] left-1/2 absolute bg-gradient-to-b from-transparent to-lab-green' style={style}></div>
								<Timeline
									date="1-6 May, 2021"
									title="Registration"
									description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. It's that easy :)"
									alignment="right"
								/>
								<Timeline
									date="6-9 May, 2021"
									title="Participation"
									description="Participate online. The links for your registered events will be sent to you via email and WhatsApp groups. Use those links and show your talent."
									alignment="left"
								/>
								<Timeline
									date="10 May, 2021"
									title="Result Declaration"
									description="The ultimate genius will be revealed by our judging panel on 10th May, 2021, and the results will be announced on the WhatsApp groups and will be mailed to you."
									alignment="right"
								/>
								<Timeline
									date="12 May, 2021"
									title="Prize Distribution"
									description="The winners will be contacted by our team for their addresses, and the winning goodies will be sent to their addresses."
									alignment="left"
								/>
							</div>
						</div>
					</div>
				</div>
			</LayoutAlt>
		</>
	)
}

export default History