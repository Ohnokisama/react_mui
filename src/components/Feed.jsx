import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Checkbox } from "@mui/material";
import Img1 from "./../assets/images/1.jpg";
import Img2 from "./../assets/images/2.jpg";
import Img3 from "./../assets/images/3.jpg";
import Img4 from "./../assets/images/4.jpg";
import Img5 from "./../assets/images/5.jpg";
import Img6 from "./../assets/images/6.jpg";
import Img7 from "./../assets/images/7.png";

const Feed = () => {
  return (
    <Grid 
      container
      spacing={2}
      padding={'70px 10px 10px 10px'}
      flex={4}
    >
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                K
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="katake_sama"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={Img1}
            alt="Kakashi"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Is Kakashi the weakest Hokage?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }} />} />
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                K
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="katake_sama"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={Img2}
            alt="Kakashi"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Kakashi - The Lightning Prodigy
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                K
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="katake_sama"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={Img3}
            alt="Kakashi"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Does Kakashi really have 1000 jutsus in his arsenal?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                W
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="westerosi_knight"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={Img4}
            alt="Kakashi"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Why I hated the ending of Game of Thrones
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                O
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="otaku_kun"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={Img5}
            alt="Kakashi"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Was Sasuke really Naruto's best friend?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                H
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="hokage_sama"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={Img6}
            alt="Kakashi"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Ranking the top 10 fights in Naruto Shipudden
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Feed