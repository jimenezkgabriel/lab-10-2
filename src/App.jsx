import CssBaseline from '@mui/material/CssBaseline'
import { Box, Paper } from '@mui/material'
import PaginationDemo from './components/PaginationDemo'

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 800 }}>
          <PaginationDemo />
        </Paper>
      </Box>
    </>
  )
}

export default App
