import React from 'react'
import Navbar from './Component/navbar'
import Box from '@mui/material/Box';
import DetailPage from './Component/detailPage';
import Footer from './Component/footer';

function App() {
    return (
        <Box className="mb-10 w-[100%]">
            <Navbar />
            <Box>
                <DetailPage />
            </Box>
            <Footer/>
        </Box>
    )
}

export default App
