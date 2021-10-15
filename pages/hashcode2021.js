import React from 'react';
import Layout from '../components/Layout';
import {
    Timeline, TimelineItem, TimelineSeparator,
    TimelineConnector, TimelineContent, TimelineDot,
    TimelineOppositeContent
} from '@material-ui/lab';

const HashCode2021 = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://apply.devfolio.co/v2/sdk.js`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    }, []);

    return (
        <Layout title={'PIL | HashCode2021'} active={'Hashcode 2021'}>
            <div className='lg:h-screen w-full ph:pb-20' style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)', background:`url('${process.env.ASSET_PREFIX}/images/mlab/hashcode.JPG')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className='flex lg:w-4/5 lg:mx-auto mt-60 ph:mt-12 ph:flex-col ph:px-4 ph:pl-8'>
                    <div className='mb-12'>
                        <p className='text-4xl text-white'>PES Innovation Lab presents</p>
                        <p className='text-6xl mt-6' style={{color: '#8bc34a'}}>HashCode 2021</p>
                        <p className='text-xl text-white'>A 24 hour hackathon</p>
                        <p className='text-3xl mt-6 mb-12 text-white'>Let's hash it out</p>
                        <div 
                            className="apply-button" 
                            data-hackathon-slug="pes-innovation-lab-hashcode"
                            data-button-theme="dark-inverted"
                            style={{height: '44px', width: '312px'}}
                        ></div>
                        <a href="https://pes-innovation-lab-hashcode.devfolio.co/" target="_blank" className='rounded p-2 bg-white relative top-8 text-xl px-6 font-bold ph:w-full block text-center lg:w-30' style={{width: '312px'}}>View details</a>
                    </div>
                    <div className='flex-grow flex flex-col justify-center items-center ph:mt-12'>
                        <p className='text-4xl text-center' style={{color: '#8bc34a'}}>Sponsors</p>                        
                        <div className='flex my-4 mt-8 justify-center'>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/nokia_logo_color.png`} className='lg:h-16 mx-4 ph:w-1/2'/>
                        </div>
                        <div className='flex my-4 justify-center'>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Devfolio_Logo-White.png`} className='lg:h-16 mx-4 ph:w-1/3'/>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Polygon_Logo-White.png`} className='lg:h-16 mx-4 ph:w-1/3'/>
                        </div>
                        <div className='flex my-4 justify-center'>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Celo Logo Color Reverse.png`} className='lg:h-16 mx-2 ph:w-20'/>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Filecoin Coloured White Text-1.png`} className='lg:h-16 mx-2 ph:w-22 ph:h-8'/>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Tezos_Logo-White.png`} className='lg:h-16 mx-2 ph:w-18 ph:h-8'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:w-3/5 mx-auto mt-12 ph:px-4'>
                <p className='text-2xl text-white font-bold' style={{color: '#8bc34a'}}>
                    Inviting all undergraduate developers to participate 
                    in an epic 24-hour technical showdown - HashCode 2021 by PES Innovation Lab, PES University.
                </p>

                <p className='text-xl mt-8 text-justify text-white'>
                    We at PES Innovation Lab are proud to present the 10th iteration of HashCode, 
                    the flagship Hackathon of PES University. We invite fellow students pursuing 
                    B.Tech to the challenge. Spend 24 hours in this epic showdown of innovating, 
                    ideating, and inspiring. Cash prizes worth 1 lakh Indian Rupees up for 
                    grabs for the winners.
                </p>
            </div>

            <div className='mt-12 py-12' style={{clipPath: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)', background:`url('${process.env.ASSET_PREFIX}/images/mlab/shattered.png')`}}>
                <p className='text-center text-5xl mt-6'>Timeline</p>
                <Timeline position="alternate" className='mt-8'>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl ph:text-lg'>14th October 23:59</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl ph:text-lg'>Registrations begin</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl ph:text-lg'>Registrations close</p>
                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl ph:text-lg'>22nd October 23:59</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl ph:text-lg'>24th October 18:00</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl ph:text-lg'>Announcement of shortlisted teams</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl ph:text-lg'>Hack begins</p>                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl ph:text-lg'>30th October 09:00</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl ph:text-lg'>31st October 09:00</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl ph:text-lg'>Hack ends</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl ph:text-lg'>Announcement of winners</p>                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl ph:text-lg'>31st October 11:00</p>
                        </TimelineContent>                        
                    </TimelineItem>
                </Timeline>
            </div>


        </Layout>        
    )
}


export default HashCode2021;
