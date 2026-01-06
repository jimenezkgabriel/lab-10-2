import React, { useState } from "react";
import usePagination from "../utils/usePagination";
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, List, ListItem, TextField, Button, Pagination, Stack, Chip } from '@mui/material';

function PaginationDemo() {
    const totalItems = 123;
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const {
        currentPage,
        totalPages,
        goToPage,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage
    } = usePagination(totalItems, itemsPerPage);

    return (
        <Container sx={{ py: 2 }}>
            <Typography variant="h5" gutterBottom>Pagination Demo</Typography>

            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 1, width: '100%' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography>Total Items: {totalItems}</Typography>
                    <FormControl size="small" sx={{ minWidth: 140 }}>
                        <InputLabel id="items-per-page-label">Items Per Page</InputLabel>
                        <Select
                            labelId="items-per-page-label"
                            value={itemsPerPage}
                            label="Items Per Page"
                            onChange={(e) => { setItemsPerPage(Number(e.target.value)); goToPage(1); }}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Chip label={`Items on page: ${itemsOnCurrentPage.length}`} color="primary" />
            </Stack>
            <Typography>Current Page: {currentPage} of {totalPages}</Typography>
            <Typography>Showing items {startIndex + 1} to {endIndex}:</Typography>

            <List dense>
                {itemsOnCurrentPage.map(item => (
                    <ListItem key={item}>Item {item}</ListItem>
                ))}
            </List>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
                <TextField
                    type="number"
                    label="Go to page"
                    size="small"
                    value={currentPage}
                    onChange={(e) => goToPage(Number(e.target.value))}
                    slotProps={{ htmlInput: { min: 1, max: totalPages } }}
                />

                <Pagination count={totalPages} page={currentPage} onChange={(e, value) => goToPage(value)} />

                <Button variant="outlined" onClick={prevPage} disabled={!canPrevPage}>Previous</Button>
                <Button variant="contained" onClick={nextPage} disabled={!canNextPage}>Next</Button>
            </Stack>
        </Container>
    );
}

export default PaginationDemo;