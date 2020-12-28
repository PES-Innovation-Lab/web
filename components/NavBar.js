// components/NavBar.js
import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Button, 
		 IconButton, SwipeableDrawer, List,
		 ListItem, ListItemText, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import css from '../css/navbar.css';

const useStyles = makeStyles((theme) => ({
	root: {
	  	flexGrow: 1,
	},
	menuButton: {
	  	marginRight: theme.spacing(2),
	},
	title: {
	  	flexGrow: 1,
	  	display: 'none',
	  	[theme.breakpoints.up('sm')]: {
			display: 'block',
	  	},
	},
	search: {
	  	position: 'relative',
	  	borderRadius: theme.shape.borderRadius,
	  	backgroundColor: fade(theme.palette.common.white, 0.15),
	  	'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
	  	},
	  	marginLeft: 0,
	  	width: '100%',
	  	[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
	  	},
	},
	searchIcon: {
	  	padding: theme.spacing(0, 2),
	  	height: '100%',
	  	position: 'absolute',
	  	pointerEvents: 'none',
	  	display: 'flex',
	  	alignItems: 'center',
	  	justifyContent: 'center',
	},
	inputRoot: {
	  	color: 'inherit',
	},
	inputInput: {
	  	padding: theme.spacing(1, 1, 1, 0),	  	
	  	paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	  	transition: theme.transitions.create('width'),
	  	width: '100%',
	  	[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
		  		width: '20ch',
			},
	  	},
	},
}));

const handleSearch = (query, searchSettings) => {
	const elements = document.getElementsByClassName(searchSettings.targetClass);
	for(let ele of elements) {
		if(ele.textContent.search(query) === -1)
			ele.style.display = 'none';
		else
			ele.style.display = searchSettings.default;
	}
}

function NavBar({ active, search, searchSettings }) {
	const [ drawerOpen, setDrawerOpen ] = useState(false);
	const classes = useStyles();

    /* For fancy navbar */
	const [_document, set_document] = useState(null)
	const [sticky, setSticky] = useState(true);
	const [hasInitialised, setHasInitialised] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(null);

	useEffect(() => {
		set_document(document)
		setScrollPosition(1)
	}, [])	

	useEffect(() => {
		if (scrollPosition) setHasInitialised(true);
	}, [scrollPosition])

	const getScrollPosition = () => {
		const scrollPosition = _document.body.getBoundingClientRect()
        return scrollPosition.y;
        
    }
	
    useEffect(() => {
		if (_document && scrollPosition != null){
			const handleScroll = () => {
				const currentScrollPosition = getScrollPosition();
				setSticky(currentScrollPosition > scrollPosition);
				setScrollPosition(currentScrollPosition);
			}
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [sticky, hasInitialised, scrollPosition]);

	const navs = [
		{ title: 'Home', route:`${process.env.ASSET_PREFIX}/`},
		{ title: 'Events', route: `${process.env.ASSET_PREFIX}/events` },
		{ title: 'Members', route: `${process.env.ASSET_PREFIX}/members` },
		{ title: 'Projects', route: `${process.env.ASSET_PREFIX}/projects` },
		{ title: 'Publications', route: `${process.env.ASSET_PREFIX}/publications`},
		{ title: 'Hashcode', route: `${process.env.ASSET_PREFIX}/hashcode` },
		{ title: 'Incito', route: `${process.env.ASSET_PREFIX}/incito` },
		{ title: 'Summer', route: `${process.env.ASSET_PREFIX}/summer` },
		{ title: 'RoadShow', route: `${process.env.ASSET_PREFIX}/roadshow` },
		{ title: 'Our History', route: `${process.env.ASSET_PREFIX}/about_us`},
	]
	
    return (
        <AppBar className='navbar' style={
				{transform: sticky ? "translateY(0%)" : "translateY(-100%)",
				transition: 'transform 0.3s ease-in',
			    position: 'sticky',
    			top: '0'}
            }>
            <Toolbar>
              	<IconButton onClick={() => { setDrawerOpen(true) }} edge="start" className='menuButton' >
                	<MenuIcon />
              	</IconButton>
				<Link href={`${process.env.ASSET_PREFIX}/`}>
					<IconButton disableFocusRipple edge="start" className='logoButton'>
						<img className='logo' src={`${process.env.ASSET_PREFIX}/images/mlab/mlab_logo_icon.png`}/>
					</IconButton>
				</Link>
        
				{navs.map((nav) => (
					<Link href={nav.route}>
						<Button disableRipple disableFocusRipple className={`navButton${active == nav.title ? ' active' : ''}`}>
							{nav.title}
						</Button>
					</Link>
				))}

				{search ? (
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
							onInput={(e) => {handleSearch(e.target.value, searchSettings)}}
						/>
					</div>) : null}

            </Toolbar>
			<SwipeableDrawer
      			anchor={'left'}
      			open={ drawerOpen }
      			onClose={ () => { setDrawerOpen(false) } }
				onOpen={ () => { setDrawerOpen(true) } }				
    		>
				<List className='navDrawer'>
					<ListItem button className='drawerMenu' style={{borderBottom: '1px solid grey'}}>
						<img className='logo' src={`${process.env.ASSET_PREFIX}/images/mlab/mlab_logo.png`} style={{width: 250}}/>
					</ListItem>
					{navs.map((nav) => (
						<Link href={nav.route}>
							<ListItem button key={nav.title} className='drawerMenu'>
								<ListItemText className={`drawerNavText${active == nav.title ? ' active' : ''}`} primary={nav.title} />
							</ListItem>
						</Link>
					))}
				</List>      			
    		</SwipeableDrawer>
        </AppBar>
    );
}

export default NavBar;