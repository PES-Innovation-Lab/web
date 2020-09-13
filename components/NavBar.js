// components/NavBar.js
import React, { useState } from 'react'
import { AppBar, Toolbar, Button, 
		 IconButton, SwipeableDrawer, List,
		 ListItem, ListItemText, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';

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

	const navs = [
		{ title: 'Events', route: '/events' },
		{ title: 'Members', route: '/members' },
		{ title: 'Projects', route: '/projects' },
		{ title: 'Hashcode', route: '/hashcode' }
	]
	
    return (
        <AppBar position="static" className='navbar'>
            <Toolbar>
              	<IconButton onClick={() => { setDrawerOpen(true) }} edge="start" className='menuButton' >
                	<MenuIcon />
              	</IconButton>
				<Link href="/">
					<IconButton disableFocusRipple edge="start" className='logoButton'>
						<img className='logo' src="images/mlab/mlab_logo_icon.png"/>
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
						<img className='logo' src="images/mlab/mlab_logo.png" style={{width: 250}}/>
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