import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';

import SignUp from './SignUp'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

import { logoutUser } from '../features/user/userSlice';

import { useNavigate } from 'react-router-dom';


function ResponsiveAppBar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user } = useSelector((state) => state.auth)

  // const settings = ['Profile', 'Browse', 'Logout'];

  const settings = user ? ['Main', 'Profile', 'Browse'] : ['Main', 'Browse']


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickLogout = () => {
    setAnchorElUser(null);
    dispatch(logoutUser())
    navigate('/main')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MultilineChartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/main"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio Tracker
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
          {/* this is for spacing */}
          </Box>

          {/* <Box display={"flex"} alignContent={"center"}> */}
          <Box display="flex" alignItems="center">

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MenuIcon sx={{color:"white"}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  // <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <MenuItem key={setting} component={Link} to={`/${setting.toLowerCase()}`} onClick={handleCloseUserMenu}>
                    {/* <Link href={`/${setting.toLowerCase()}`} underline ='none' sx={{color:'black'}}> */}
                    {/* dont get rid of the above, it works */}
                      {setting}
                    {/* </Link> */}
                  </MenuItem>
                ))}
                { !user ?
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <SignUp></SignUp>
                    </MenuItem>
                    
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Login></Login>
                    </MenuItem>
                  </> :
                  <MenuItem onClick={onClickLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  
                }
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
