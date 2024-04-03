import React from 'react'
import Layout from '../components/Layout'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@material-ui/lab'

import {
    Dialog,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Slide,
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const HashCode2021 = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Layout title={'PIL | HashCode2021'} active={'Hashcode 2021'}>
            <div
                className="ph:pb-20 w-full lg:h-screen"
                style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)',
                    background: `url('/images/mlab/hashcode.JPG')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="ph:mt-12 ph:flex-col ph:px-4 ph:pl-8 mt-40 flex lg:mx-auto lg:w-4/5">
                    <div className="mb-12">
                        <p className="text-4xl text-white">
                            PES Innovation Lab presents
                        </p>
                        <p
                            className="mt-6 text-6xl"
                            style={{ color: '#8bc34a' }}
                        >
                            HashCode 2021
                        </p>
                        <p className="text-xl text-white">
                            A 24 hour hackathon
                        </p>
                        <p className="mb-12 mt-6 text-3xl text-white">
                            Let's hash it out
                        </p>
                        <div
                            onClick={() => setOpen(true)}
                            href="https://pes-innovation-lab-hashcode.devfolio.co/"
                            target="_blank"
                            className="ph:w-full lg:w-30 block cursor-pointer rounded bg-white p-2 px-6 text-center text-xl font-bold"
                            style={{ width: '312px' }}
                        >
                            View shortlisted teams
                        </div>
                        <a
                            href="https://pes-innovation-lab-hashcode.devfolio.co/"
                            target="_blank"
                            className="ph:w-full lg:w-30 relative top-8 block rounded bg-white p-2 px-6 text-center text-xl font-bold"
                            style={{ width: '312px' }}
                        >
                            View details
                        </a>
                    </div>
                    <div className="ph:mt-12 flex flex-grow flex-col items-center justify-center">
                        <p
                            className="text-center text-4xl"
                            style={{ color: '#8bc34a' }}
                        >
                            Sponsors
                        </p>
                        <div className="align-center my-4 mt-8 flex justify-center">
                            <img
                                src={`/images/sponsors/nokia_logo_color.png`}
                                className="ph:w-1/2 mx-4 lg:h-16"
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.8)',
                                padding: '4px 4px',
                            }}
                        >
                            <img
                                src={`/images/sponsors/logo-dark-groww.83f43714.svg`}
                                className="ph:w-1/3 lg:h-16"
                            />
                        </div>
                        <div className="my-4 flex justify-center">
                            <img
                                src={`/images/sponsors/Devfolio_Logo-White.png`}
                                className="ph:w-1/3 mx-4 lg:h-16"
                            />
                            <img
                                src={`/images/sponsors/Polygon_Logo-White.png`}
                                className="ph:w-1/3 mx-4 lg:h-16"
                            />
                        </div>
                        <div className="my-4 flex justify-center">
                            <img
                                src={`/images/sponsors/Celo Logo Color Reverse.png`}
                                className="ph:w-20 mx-2 lg:h-16"
                            />
                            <img
                                src={`/images/sponsors/Filecoin Coloured White Text-1.png`}
                                className="ph:w-22 ph:h-8 mx-2 lg:h-16"
                            />
                            <img
                                src={`/images/sponsors/Tezos_Logo-White.png`}
                                className="ph:w-18 ph:h-8 mx-2 lg:h-16"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ph:px-4 mx-auto mt-12 lg:w-3/5">
                <p
                    className="text-2xl font-bold text-white"
                    style={{ color: '#8bc34a' }}
                >
                    Inviting all undergraduate developers to participate in an
                    epic 24-hour technical showdown - HashCode 2021 by PES
                    Innovation Lab, PES University.
                </p>

                <p className="mt-8 text-justify text-xl text-white">
                    We at PES Innovation Lab are proud to present the 10th
                    iteration of HashCode, the flagship Hackathon of PES
                    University. We invite fellow students pursuing B.Tech to the
                    challenge. Spend 24 hours in this epic showdown of
                    innovating, ideating, and inspiring. Cash prizes worth 1
                    lakh Indian Rupees up for grabs for the winners.
                </p>
            </div>

            <div
                className="mt-12 py-12"
                style={{
                    clipPath: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)',
                    background: `url('/images/mlab/shattered.png')`,
                }}
            >
                <p className="mt-6 text-center text-5xl">Timeline</p>
                <Timeline position="alternate" className="mt-8">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="ph:text-lg text-xl">
                                14th October 23:59
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="ph:text-lg text-xl">
                                Registrations begin
                            </p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="ph:text-lg text-xl">
                                Registrations close
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="ph:text-lg text-xl">
                                22nd October 23:59
                            </p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="ph:text-lg text-xl">
                                24th October 18:00
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="ph:text-lg text-xl">
                                Announcement of shortlisted teams
                            </p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="ph:text-lg text-xl">Hack begins</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="ph:text-lg text-xl">
                                30th October 09:00
                            </p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="ph:text-lg text-xl">
                                31st October 09:00
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="ph:text-lg text-xl">Hack ends</p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="ph:text-lg text-xl">
                                Announcement of winners
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="ph:text-lg text-xl">
                                31st October 11:00
                            </p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
            >
                <AppBar className="dialogAppBar">
                    <Toolbar>
                        <Typography variant="h6" className="dialogTitle">
                            Shortlisted Teams
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon
                                style={{ float: 'right', color: '#8bc34a' }}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="ph:w-full mx-auto mt-24 flex lg:w-3/5">
                    <div className="ph:px-4 flex w-1/2 flex-col items-end lg:px-8">
                        <p className="ph:text-sm lg:text-xl">
                            (A)lso (K)nown (A)s
                        </p>
                        <p className="ph:text-sm lg:text-xl">ANUI</p>
                        <p className="ph:text-sm lg:text-xl">Apple Pi</p>
                        <p className="ph:text-sm lg:text-xl">BetterButter</p>
                        <p className="ph:text-sm lg:text-xl">Block Ops</p>
                        <p className="ph:text-sm lg:text-xl">BruteForcers</p>
                        <p className="ph:text-sm lg:text-xl">Change seekers</p>
                        <p className="ph:text-sm lg:text-xl">Code of Duty </p>
                        <p className="ph:text-sm lg:text-xl">CodeIndies</p>
                        <p className="ph:text-sm lg:text-xl">CSium</p>
                        <p className="ph:text-sm lg:text-xl">Deep-N-Dense</p>
                        <p className="ph:text-sm lg:text-xl">Don't panic</p>
                        <p className="ph:text-sm lg:text-xl">Dragon glass</p>
                        <p className="ph:text-sm lg:text-xl">EDITH </p>
                        <p className="ph:text-sm lg:text-xl">Epiphany</p>
                        <p className="ph:text-sm lg:text-xl">Falcon </p>
                        <p className="ph:text-sm lg:text-xl">Foodocus</p>
                        <p className="ph:text-sm lg:text-xl">Hackstreet Boys</p>
                        <p className="ph:text-sm lg:text-xl">hackstreet_boys</p>
                        <p className="ph:text-sm lg:text-xl">HashBrowns</p>
                    </div>
                    <div className="w-1/2">
                        <p className="ph:text-sm lg:text-xl">Hungry Pandas</p>
                        <p className="ph:text-sm lg:text-xl">Jack Rabbits </p>
                        <p className="ph:text-sm lg:text-xl">MARS</p>
                        <p className="ph:text-sm lg:text-xl">Mixer Grinders</p>
                        <p className="ph:text-sm lg:text-xl">Naive Linguists</p>
                        <p className="ph:text-sm lg:text-xl">newmonic</p>
                        <p className="ph:text-sm lg:text-xl">PeterCat</p>
                        <p className="ph:text-sm lg:text-xl">Pirates</p>
                        <p className="ph:text-sm lg:text-xl">R Slickerz </p>
                        <p className="ph:text-sm lg:text-xl">R_Squared_S</p>
                        <p className="ph:text-sm lg:text-xl">Ro-dolf</p>
                        <p className="ph:text-sm lg:text-xl">Ryzen</p>
                        <p className="ph:text-sm lg:text-xl">SegFault</p>
                        <p className="ph:text-sm lg:text-xl">ShellStorm</p>
                        <p className="ph:text-sm lg:text-xl">Shift Ctrl</p>
                        <p className="ph:text-sm lg:text-xl">Sovellus</p>
                        <p className="ph:text-sm lg:text-xl">Team Ethconnect</p>
                        <p className="ph:text-sm lg:text-xl">Tetris</p>
                        <p className="ph:text-sm lg:text-xl">
                            The Baked Brownies
                        </p>
                        <p className="ph:text-sm lg:text-xl">Trojan hammers</p>
                    </div>
                </div>
            </Dialog>
        </Layout>
    )
}

export default HashCode2021
