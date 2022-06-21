import React from 'react'
import Box from '@mui/material/Box';
import ProfilePic from '../assest/profile.svg';
import PostImg from '../assest/yourPost.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Post from './post'
import SmilePic from '../assest/smile.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const tabs = ["#bffs", "#shocking", "#veryfunny", "#workfromhome", "#zoom"]

const handleClick=()=>{
 let ReplyBox= document.getElementById("addAnimation")
 ReplyBox?.classList.toggle("animation")
}
const handleClick2=()=>{
    let ReplyBox= document.getElementById("addAnimation2")
    ReplyBox?.classList.toggle("animation")
   }

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
                    <Box className="w-[100%] mt-5 flex lg:flex-row flex-col gap-5">
                        <Box className="lg:w-[60%]">
                            <Box className="h-[490px] w-[100%] bg-[#F9FAFB]">
                                <img src={PostImg} className="w-[100%] h-[100%]" alt="" />
                            </Box>
                            <Box className=" mt-10 overflow-x-hidden">
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
                        <Box className="lg:w-[40%] border rounded-lg">
                            <Box className="pt-1 px-4">
                                <span className="text-[14px]">24 comments</span>
                                <Box className="flex justify-between items-center mt-5">
                                    <Box className="w-[24px] h-[24px] bg-[#5099E3] rounded-full flex justify-center items-center">
                                        <img src={SmilePic} className="w-[20px] h-[20px]" alt="" />
                                    </Box>
                                    <span className="lg:text-[12px] xl:text-[16px] xl:w-auto lg:w-[90px] xl:ml-5 sm:w-auto w-[120px]">Log In to leave a comment</span>
                                    <Button className="btn outlineBtn w-[100px] h-[32px]" startIcon={<AccountCircleIcon />}>
                                        <span className="text-[12px]">Log In</span>
                                    </Button>
                                </Box>
                            </Box>
                            <Box className="py-5 mt-4 pl-4 bg-[#EAEAEA] h-[581px] overflow-y-auto">
                                <Box className="flex gap-x-3">
                                    <img src={ProfilePic} className="w-[32px] h-[32px]" alt="" />
                                    <Box>
                                        <span className="font-medium">bearcubsohmy</span>
                                        <span className="block mt-3 sm:pr-10 pr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A maecenas nullam morbi rhoncus, non.</span>
                                        <Box className="flex items-center sm:gap-x-5 gap-x-2 mt-6 text-[#2066C7]">
                                            <KeyboardArrowDownIcon onClick={handleClick} />
                                            <span className="sm:text-[14px] text-[12px] font-bold">view 7 replies</span>
                                            <button className="w-[87px] h-[32px] flex justify-center items-center text-[14px] font-medium border border-[#5099E3] text-[#5099E3] rounded-full">Reply</button>
                                        </Box>
                                        <Box className="bg-white rounded-l-lg pl-4 mt-4 overflow-hidden replyBox" id="addAnimation">
                                            <Box className="flex gap-x-3 pt-4">
                                                <img src={ProfilePic} className="w-[32px] h-[32px]" alt="" />
                                                <Box>
                                                    <span className="font-medium">bearcubsohmy</span>
                                                    <span className="block mt-2 sm:pr-10 pr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A maecenas nullam morbi rhoncus, non.</span>
                                                </Box>
                                            </Box>
                                            <Box className="flex gap-x-3 mt-8 pb-4">
                                                <img src={ProfilePic} className="w-[32px] h-[32px]" alt="" />
                                                <Box>
                                                    <span className="font-medium">bearcubsohmy</span>
                                                    <span className="block mt-2 sm:pr-10 pr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A maecenas nullam morbi rhoncus, non.</span>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="flex gap-x-3 mt-8">
                                    <img src={ProfilePic} className="w-[32px] h-[32px]" alt="" />
                                    <Box>
                                        <span className="font-medium">bearcubsohmy</span>
                                        <span className="block mt-3 sm:pr-10 pr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A maecenas nullam morbi rhoncus, non.</span>
                                        <Box className="flex items-center sm:gap-x-5 gap-x-2 mt-6 text-[#2066C7]">
                                            <KeyboardArrowDownIcon onClick={handleClick2} />
                                            <span className="sm:text-[14px] text-[12px] font-bold">view 7 replies</span>
                                            <button className="w-[87px] h-[32px] flex justify-center items-center text-[14px] font-medium border border-[#5099E3] text-[#5099E3] rounded-full">Reply</button>
                                        </Box>
                                        <Box className="bg-white rounded-l-lg pl-4 mt-4 overflow-hidden replyBox" id="addAnimation2">
                                            <Box className="flex gap-x-3 pt-4">
                                                <img src={ProfilePic} className="w-[32px] h-[32px]" alt="" />
                                                <Box>
                                                    <span className="font-medium">bearcubsohmy</span>
                                                    <span className="block mt-2 pr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A maecenas nullam morbi rhoncus, non.</span>
                                                </Box>
                                            </Box>
                                            <Box className="flex gap-x-3 mt-8 pb-4">
                                                <img src={ProfilePic} className="w-[32px] h-[32px]" alt="" />
                                                <Box>
                                                    <span className="font-medium">bearcubsohmy</span>
                                                    <span className="block mt-2 pr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A maecenas nullam morbi rhoncus, non.</span>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Post />
        </>
    )
}

export default DetailPage
