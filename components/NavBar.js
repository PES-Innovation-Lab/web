// components/NavBar.js
import React, { useState } from 'react'
import { AppBar, Toolbar, Button, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';


function NavBar({ active }) {
	const [ drawerOpen, setDrawerOpen ] = useState(false);
	console.log(active);
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