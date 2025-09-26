import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Img1 from "./../assets/images/1.jpg";
import Img2 from "./../assets/images/2.jpg";
import Img3 from "./../assets/images/3.jpg";
import Img4 from "./../assets/images/4.jpg";
import Img5 from "./../assets/images/5.jpg";
import Img6 from "./../assets/images/6.jpg";
import Img7 from "./../assets/images/7.png";

const Rightbar = () => {
  return (
    <Box 
      flex={1.5}
      sx={{
        borderLeft: '2px solid #d1d1d1',
        display: {
          xs: 'none',
          sm: 'block'
        }
      }}
      padding={'70px 10px 10px 10px'}
    >
      <Box position={'fixed'} p={2}>
        <Typography variant='h5' >
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={Img1} />
          <Avatar alt="Travis Howard" src={Img2} />
          <Avatar alt="Cindy Baker" src={Img3} />
          <Avatar alt="Agnes Walker" src={Img4} />
          <Avatar alt="Trevor Henderson" src={Img5} />
          <Avatar alt="Remy Sharp" src={Img6} />
          <Avatar alt="Travis Howard" src={Img7} />
          <Avatar alt="Cindy Baker" src={Img1} />
          <Avatar alt="Agnes Walker" src={Img1} />
          <Avatar alt="Trevor Henderson" src={Img1} />
        </AvatarGroup>

        <Typography variant='h5' mt={5}>
          Messages
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={Img1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={Img2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={Img3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar