import React, { useState, useEffect } from 'react';
import useDebounce from '../utils/useDebounce';
import { Box, TextField, Typography, List, ListItem, CircularProgress } from '@mui/material';

export default function DebounceSearchDemo() {
  const [input, setInput] = useState('');
  const debouncedValue = useDebounce(input, 500);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When debouncedValue changes, simulate a network search
    if (debouncedValue === '') {
      setLoading(false);
      return;
    }

    setLoading(true);
    const t = setTimeout(() => {
      setLoading(false);
    }, 700); // simulate search delay after debounce

    return () => clearTimeout(t);
  }, [debouncedValue]);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" gutterBottom>Debounce Search Demo</Typography>
      <TextField
        label="Search"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        size="small"
        variant="outlined"
      />

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">Immediate value: <strong>{input}</strong></Typography>
        <Typography variant="body2">Debounced value: <strong>{debouncedValue}</strong></Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        {debouncedValue === '' ? (
          <Typography variant="body2">Type something to search.</Typography>
        ) : loading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={16} />
            <Typography variant="body2">Searching...</Typography>
          </Box>
        ) : (
          <Box>
            <Typography variant="subtitle1">Results for "{debouncedValue}"</Typography>
            <List dense>
              <ListItem>List item 1</ListItem>
              <ListItem>List item 2</ListItem>
              <ListItem>List item 3</ListItem>
            </List>
          </Box>
        )}
      </Box>
    </Box>
  );
}
