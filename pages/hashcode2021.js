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
            <div className='h-screen w-full' style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)', background:`url('${process.env.ASSET_PREFIX}/images/mlab/hashcode.JPG')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className='flex w-4/5 mx-auto mt-60'>
                    <div className=''>
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
                    </div>
                    <div className='flex-grow flex flex-col justify-center items-center'>
                        <p className='text-4xl text-center' style={{color: '#8bc34a'}}>Sponsors</p>                        
                        <div className='flex my-4 mt-8'>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/nokia_logo_color.png`} className='h-16 mx-4'/>
                        </div>
                        <div className='flex my-4'>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Devfolio_Logo-White.png`} className='h-16 mx-4'/>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Polygon_Logo-White.png`} className='h-16 mx-4'/>
                        </div>
                        <div className='flex my-4'>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Celo Logo Color Reverse.png`} className='h-16 mx-4'/>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Filecoin Coloured White Text-1.png`} className='h-16 mx-4'/>
                            <img src={`${process.env.ASSET_PREFIX}/images/sponsors/Tezos_Logo-White.png`} className='h-16 mx-4'/>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='w-3/5 mx-auto mt-12'>
                <p className='text-3xl text-white font-bold text-justify' style={{color: '#8bc34a'}}>
                    Inviting all undergraduate developers to participate 
                    in an epic 24-hour technical showdown - HashCode 2021 by PES Innovation Lab, PES University.
                </p>

                <p className='text-2xl mt-8 text-justify text-white'>
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
                            <p className='text-xl'>14th October 23:59</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl'>Registrations begin</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl'>Registrations close</p>
                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl'>22nd October 23:59</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl'>24th October 18:00</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl'>Announcement of shortlisted teams</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl'>Hack begins</p>                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl'>30th October 09:00</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl'>31st October 09:00</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl'>Hack ends</p>
                        </TimelineContent>                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className='text-xl'>Announcement of winners</p>                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className='text-xl'>31st October 11:00</p>
                        </TimelineContent>                        
                    </TimelineItem>
                </Timeline>
            </div>


        </Layout>        
    )
}


export default HashCode2021;
