import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Post01 from "../assest/post1.svg"
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ProfilePic from '../assest/profile.svg';

const PostData = [
    { Img: Post01, name: "Me in my profile pic vs. me in the zoom meeting" },
    { Img: Post01, name: "Me in my profile pic vs. me in the zoom meeting" },
    { Img: Post01, name: "Me in my profile pic vs. me in the zoom meeting" },
]

function DetailPage() {
    return (
        <Box className="w-[100%] relative flex justify-center items-center grad mt-20 py-20">
            <Box className="lg:px-10 px-5 xl:w-[70%] w-[90%]">
                <span className="text-[44px] font-medium">Looking for more?</span>
                <Box className="flex flex-wrap justify-center mt-10 gap-8">
                    {PostData && PostData.map((list, index) => {
                        return <Card className="w-[392px] h-[318px]">
                            <Box className="h-[72px] flex items-center justify-between px-4">
                                <Box className="flex items-center">
                                    <Box className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white">
                                        <img src={ProfilePic} className="w-[40px] h-[40px]" alt="" />
                                    </Box>
                                    <Typography className="w-[190px] pl-3 text-left">{list.name}</Typography>
                                </Box>
                                <LinkIcon />
                            </Box>
                            <img src={list.Img} className="w-[100%] h-[174px]" alt="" />
                            <Box className="h-[72px] flex items-center justify-between px-4">
                                <Stack spacing={2} direction="row">
                                    <Button className="like" startIcon={<ThumbUpIcon />}>1.5k</Button>
                                    <Button className="dislike" startIcon={<VisibilityIcon />}>
                                        1.5k
                                    </Button>
                                </Stack>
                                <Button className="btn colorBtn">Remix</Button>
                            </Box>
                        </Card>
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default DetailPage
