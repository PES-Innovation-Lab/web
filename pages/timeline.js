import React from 'react'
import Layout from '../components/Layout'

function Timeline() {
	return (
		<>
			<Layout title={'PIL | Timeline'}>
				<div>
					<div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
						<div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
							<p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-lab-green font-semibold">The History of PIL</p>
							<p className="text-sm md:text-base text-gray-50 mb-4">
								Walk through the events that forged PIL into what it is today.
							</p>
						</div>
						<div className="ml-0 md:ml-12 lg:w-2/3 sticky">
							<div className="container mx-auto w-full h-full">
								<div className="relative wrap overflow-hidden p-4 h-full">
									<div className="border-2-2 border-yellow-555 absolute h-full border hidden"></div>
									<div className="border-2-2 border-yellow-555 absolute h-full border left-1/2"></div>
									<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
										<div className="order-1 w-5/12"></div>
										<div className="order-1 w-5/12 px-1 py-4 text-right">
											<p className="mb-3 text-base text-lab-light-green">1-6 May, 2021</p>
											<h4 className="mb-3 font-bold text-lg md:text-2xl text-lab-green">Registration</h4>
											<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
												Pick your favourite event(s) and register in that event by filling the form corresponding to that
												event. Its that easy :)
											</p>
										</div>
									</div>
									<div className="mb-8 flex justify-between items-center w-full right-timeline">
										<div className="order-1 w-5/12"></div>
										<div className="order-1  w-5/12 px-1 py-4 text-left">
											<p className="mb-3 text-base text-lab-light-green">6-9 May, 2021</p>
											<h4 className="mb-3 font-bold text-lg md:text-2xl text-lab-green">Participation</h4>
											<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
												Participate online. The links for your registered events will be sent to you via email and whatsapp
												groups. Use those links and show your talent.
											</p>
										</div>
									</div>
									<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
										<div className="order-1 w-5/12"></div>
										<div className="order-1 w-5/12 px-1 py-4 text-right">
											<p className="mb-3 text-base text-lab-light-green"> 10 May, 2021</p>
											<h4 className="mb-3 font-bold text-lg md:text-2xl text-lab-green">Result Declaration</h4>
											<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
												The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
												announced on the whatsapp groups and will be mailed to you.
											</p>
										</div>
									</div>

									<div className="mb-8 flex justify-between items-center w-full right-timeline">
										<div className="order-1 w-5/12"></div>

										<div className="order-1  w-5/12 px-1 py-4">
											<p className="mb-3 text-base text-lab-light-green">12 May, 2021</p>
											<h4 className="mb-3 font-bold  text-lg md:text-2xl text-left text-lab-green">Prize Distribution</h4>
											<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
												The winners will be contacted by our team for their addresses and the winning goodies will be sent at
												their addresses.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Timeline