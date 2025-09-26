import { AddCircle, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { useState } from 'react';
import Img1 from "./../assets/images/1.jpg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 300,
    md: 800
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px'
};

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip sx={{
        position: 'fixed',
        zIndex: '1000',
        bottom: 20,
        left: { xs: '80%', md: 20 }
      }}
        onClick={handleOpen}
      >
        <Fab color='primary'>
          <AddCircle />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Create Post
          </Typography>
          <Box 
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              marginTop: 2
            }}
          >
            <Avatar src={Img1} sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} component={'p'}>
              John Doe
            </Typography>
          </Box>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={6}
            variant="standard"
            sx={{
              width: '100%',
              marginTop: 2
            }}
            placeholder="What's on your mind?"
          />
          <Stack direction={'row'} gap={1} mt={2} mb={2}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <Button variant='contained' sx={{ width: '50%', display: 'block', margin: '0 auto' }}>
            Post
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default Add