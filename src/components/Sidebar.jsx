import { Article, DarkMode, Drafts, Group, Home, ListAlt, ListRounded, Person } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

const Sidebar = () => {
  return (
    <Box 
      flex={1}
      sx={{
        // borderRight: '2px solid #d1d1d1',
        boxShadow: '2px 2px 20px rgba(0,0,0,.2)',
        display: {
          xs: 'none',
          sm: 'block'
        },
      }}
      p={2}
    >
      <Box position={'fixed'}>
        <List
          sx={{
            paddingTop: '60px'
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      
    </Box>
  )
}

export default Sidebar