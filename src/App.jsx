import { Box, Stack } from "@mui/material"
import { Add, Feed, Navbar, Rightbar, Sidebar } from "./components"

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' justifyContent='space-between' sx={{
        width: '100%'
      }}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  )
}

export default App
