// pages/projects.js
import {
    AppBar,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Dialog,
    Grid,
    IconButton,
    Slide,
    Toolbar,
    Typography,
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
// import '../css/projects.css';
import projectsData from '../public/data/projects_common.json'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const designStyles = makeStyles({
    headingStyle: {
        fontSize: '2rem',
    },
    spinnerTextStyle: {
        textAlign: 'center',
        color: '#7cb342',
    },
    linkStyle: {
        textDecoration: 'none',
    },
})

function Projects_spotlight() {
    const [data, setData] = useState({ projects: [] })
    const [open, setOpen] = React.useState(false)
    const [isDataLoaded, setDataLoaded] = useState(false)
    const [isProjectFromURL, setIsProjectFromURL] = useState(true)

    const viewProject = (project) => {
        setSelectedProject(project)
        setOpen(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            // const result = await fetch('https://api-vercel-mlabwebdev.vercel.app/projects');
            const result = await fetch('/data/projects.json')
            if ((await result.status) !== 200) {
                alert('API Error. Try again later')
            } else {
                const output = await result.json()
                const projects = []
                for (const key in output) {
                    for (const chipKey in output[key].projects) {
                        output[key].projects[chipKey].keywords =
                            output[key].projects[chipKey].keywords.split(',')
                        output[key].projects[chipKey].interns =
                            output[key].projects[chipKey].interns.split(',')
                        output[key].projects[chipKey].mentors =
                            output[key].projects[chipKey].mentors.split(',')
                        output[key].projects[chipKey].id = output[key].projects[
                            chipKey
                        ].title
                            .replace(/\s+/g, '-')
                            .toLowerCase()
                    }
                    projects.push({ key: key, data: output[key] })
                }
                projects.reverse()
                setData({ projects: projects })
            }
            setDataLoaded(true)
        }
        // fetchData();

        const fetch = () => {
            const output = projectsData
            const projects = []
            for (const key in output) {
                for (const chipKey in output[key].projects) {
                    output[key].projects[chipKey].keywords =
                        output[key].projects[chipKey].keywords.split(',')
                    output[key].projects[chipKey].interns =
                        output[key].projects[chipKey].interns.split(',')
                    output[key].projects[chipKey].mentors =
                        output[key].projects[chipKey].mentors.split(',')
                    output[key].projects[chipKey].id = output[key].projects[
                        chipKey
                    ].title
                        .replace(/\s+/g, '-')
                        .toLowerCase()
                }
                projects.push({ key: key, data: output[key] })
            }
            projects.reverse()
            setData({ projects: projects })
            setDataLoaded(true)
        }
        fetch()
    }, [])

    const checkProjectHashString = () => {
        if (!data.projects.length) return
        const projectId = window.location.hash.substring(1)

        let project

        data.projects.forEach((item) => {
            item.data.projects.forEach((proj) => {
                if (proj.id === projectId) project = proj
            })
        })

        if (project) viewProject(project)
        else if (isDataLoaded) setOpen(false)
    }

    useEffect(() => {
        if (isDataLoaded)
            window.addEventListener('hashchange', checkProjectHashString, false)
    }, [isDataLoaded])

    useEffect(() => {
        checkProjectHashString()
    }, [data])

    useEffect(() => {
        if (isDataLoaded && !open) {
            setSelectedProject({ keywords: [], interns: [], mentors: [] })
            window.location.hash = ''
        }
        checkProjectHashString()
    }, [open])

    const [selectedProject, setSelectedProject] = React.useState({
        keywords: [],
        interns: [],
        mentors: [],
    })
    const designstyles = designStyles()

    // function pauseRow() {
    //   const cards = document.querySelectorAll('.projectCard_sp');
    //   cards.forEach(card => {
    //     card.classList.add('paused');
    //   });
    // }

    // function playRow() {
    //   const cards = document.querySelectorAll('.projectCard_sp');
    //   cards.forEach(card => {
    //     card.classList.remove('paused');
    //   });
    // }

    return (
        <Layout
            title={'PIL | Project_Spotlight'}
            active={'Projects Spotlight'}
            search={true}
            searchSettings={{
                targetClass: 'projectCardContainer_sp',
                default: 'block',
            }}
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingBottom: '2rem',
            }}
        >
            <Typography className="pageHeader">Project Spotlight</Typography>

            <Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingBottom: '2rem',
                }}
            >
                {!isDataLoaded ? (
                    <div className={designstyles.spinnerTextStyle}>
                        <Typography style={{ fontSize: '1.5rem' }}>
                            Loading Data
                        </Typography>{' '}
                        <CircularProgress
                            style={{ color: '#7cb342', marginTop: '1em' }}
                        />
                    </div>
                ) : (
                    data.projects.map((item) => (
                        <Container
                            className="projectCardContainer_sp"
                            key={item.key}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Typography className="pageSubHeader">
                                {item.key}
                            </Typography>
                            {item.data.projects.map((project) => (
                                <a
                                    key={project.id}
                                    onClick={() => setIsProjectFromURL(false)}
                                    href={'#' + project.id}
                                    className={designstyles.linkStyle}
                                >
                                    <Card
                                        className="projectCard_sp_1"
                                        style={{
                                            marginRight: '1em',
                                            marginBottom: '1em',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                className="projectCardImage"
                                                component="img"
                                                image={
                                                    project.poster_url ||
                                                    `/images/mlab/no_project_image.png`
                                                }
                                                title={project.title}
                                                loading="lazy"
                                            />
                                            <CardContent>
                                                <Typography
                                                    className="projectCardTitle"
                                                    gutterBottom
                                                    variant="h5"
                                                    component="h2"
                                                >
                                                    {project.title}
                                                </Typography>
                                                <Typography className="projectCardDescription">
                                                    {project.short_description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </a>
                            ))}
                        </Container>
                    ))
                )}
            </Container>
            <Dialog
                fullScreen
                open={open}
                onClose={() =>
                    isProjectFromURL ? setOpen(false) : history.back()
                }
                TransitionComponent={Transition}
            >
                <AppBar className="dialogAppBar">
                    <Toolbar>
                        <Typography variant="h6" className="dialogTitle">
                            {selectedProject.title}
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() =>
                                isProjectFromURL
                                    ? setOpen(false)
                                    : history.back()
                            }
                        >
                            <CloseIcon
                                style={{ float: 'right', color: '#8bc34a' }}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="projectViewContainer">
                    <div className="projectViewSectionText">
                        <ReactMarkdown
                            source={selectedProject.long_description}
                        ></ReactMarkdown>
                        <Typography className={designstyles.headingStyle}>
                            Domains:
                        </Typography>
                        {selectedProject.keywords.map((keyword) => (
                            <Chip
                                key={keyword}
                                label={keyword}
                                className="projectKeywordChip"
                                style={{
                                    fontSize: '1rem',
                                    marginRight: '0.5em',
                                    marginTop: '0.5em',
                                }}
                            ></Chip>
                        ))}
                        <Typography
                            className={designstyles.headingStyle}
                            style={{ marginTop: '1em' }}
                        >
                            Interns:
                        </Typography>
                        {selectedProject.interns.map((intern) => (
                            <Chip
                                key={intern}
                                label={intern}
                                color="primary"
                                style={{
                                    fontSize: '1rem',
                                    marginRight: '0.5em',
                                    marginTop: '0.5em',
                                }}
                            ></Chip>
                        ))}
                        <Typography
                            className={designstyles.headingStyle}
                            style={{ marginTop: '1em' }}
                        >
                            Mentors:
                        </Typography>
                        {selectedProject.mentors.map((mentor) => (
                            <Chip
                                key={mentor}
                                label={mentor}
                                color="secondary"
                                style={{
                                    fontSize: '1rem',
                                    marginRight: '0.5em',
                                    marginTop: '0.5em',
                                }}
                            ></Chip>
                        ))}
                    </div>
                    <div className="projectViewSectionImage">
                        <img
                            style={{ width: '95%' }}
                            src={
                                selectedProject.poster_url ||
                                `/images/mlab/no_project_image.png`
                            }
                        ></img>
                    </div>
                </div>
            </Dialog>
        </Layout>
    )
}
export default Projects_spotlight
