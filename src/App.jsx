import CssBaseline from '@mui/material/CssBaseline'
import { Box, Paper, Stack } from '@mui/material'
import PaginationDemo from './components/PaginationDemo'
import DebounceSearchDemo from './components/DebounceSearchDemo'

function App() {
  return (
    <>
      <CssBaseline />

      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Stack spacing={4} sx={{ width: '100%', maxWidth: 800 }}>
          <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
            <PaginationDemo />
          </Paper>

          <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
            <DebounceSearchDemo />
          </Paper>
        </Stack>
      </Box>
    </>
  )
}

export default App
