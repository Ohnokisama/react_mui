import styled from '@emotion/styled'
import { ChatBubble, Logout, Mail, Notifications, PersonAdd, Settings } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Divider, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div') (({theme}) => ({
  backgroundColor: 'white',
  padding: '5px 10px',
  borderRadius: '10px',
  color: 'black',
  width: '400px',
  [theme.breakpoints.down('sm')]: {
    width: '200px'
  }
}))

const Icons = styled(Box) (({theme}) => ({
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
}))

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ flexGrow: 1 }} position='fixed'>
      <StyledToolbar>
        <Typography 
          variant='h6' 
          sx={{ 
            display: { 
              xs: 'none', 
              sm: 'block' 
            } 
          }}
        >
          JayHub
        </Typography>
        <ChatBubble sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge 
            badgeContent={4} 
            color='error'
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
              }
            }}
          >
            <Mail color='light' />
          </Badge>
          <Badge 
            badgeContent={4} 
            color='error'
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
              }
            }}
          >
            <Notifications color='light' />
          </Badge>
          <Avatar onClick={handleClick} />
        </Icons>
      </StyledToolbar>
       <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          My Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar