import React from 'react'
import Box from '@mui/material/Box';
import ProfilePic from '../assest/profile.svg';
import PostImg from '../assest/yourPost.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Post from './post'

const tabs = ["#bffs", "#shocking", "#veryfunny", "#workfromhome", "#zoom"]

function DetailPage() {
    return (
        <>
            <Box className="w-[100%] h-auto z-50 py-4 relative flex justify-center items-center">
                <Box className="lg:px-10 px-5 xl:w-[70%] lg:w-[80%] w-[90%] mt-10">
                    <span className="text-[28px] font-medium">me in my profile pic vs. me in the zoom meeting</span>
                    <Box className="flex gap-x-3 mt-5">
                        <img src={ProfilePic} className="w-[24px] h-[24px]" alt="" />
                        <span className="text-[16px] font-medium">@dandyolly</span>
                    </Box>
                    <Box className="md:w-[650px] sm:w-[550px]">
                        <Box className="flex justify-between items-center mt-5">
                            <Stack spacing={2} direction="row">
                                <Button className="like" startIcon={<ThumbUpIcon />}>
                                    1.5k
                                </Button>
                                <Button className="dislike" startIcon={<VisibilityIcon />}>
                                    1.5k
                                </Button>
                            </Stack>
                            <Button className="btn colorBtn">Remix this Meme</Button>
                        </Box>
                    </Box>
                    <Box className="w-[100%] mt-5 flex lg:flex-row flex-col gap-8">
                        <Box className="max-w-[700px] min-w-[300px]">
                            <Box className="h-[490px] w-[100%] bg-[#F9FAFB]">
                                <img src={PostImg} className="w-[100%] h-[100%]" alt="" />
                            </Box>
                            <Box className=" mt-10 max-w-[700px] min-w-[300px] overflow-x-hidden">
                                <Box className="overflow-x-auto verticalScroll">
                                    <Box className="w-[506px] flex gap-x-4">
                                        {tabs && tabs.map((buttonList: string, index) => {
                                            return <button className="flex items-center cursor-pointer h-[48px] text-[#804BC6] flex justify-center category px-5" style={{ borderRadius: "10px" }}>
                                                {buttonList}
                                            </button>
                                        })}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="h-[683px] max-w-[700px] min-w-[300px] border">

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Post />
        </>
    )
}

export default DetailPage
