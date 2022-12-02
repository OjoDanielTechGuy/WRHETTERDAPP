import React from  'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'; //verification icon
import {FaRegComment, FaRetweet} from 'react-icons/fa' //comment icon
import {FiShare} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {format} from 'timeago.js' //importing time format displayed 

//styling the post context
const style = {
    wrapper: `flex p-3 border-b border-[#38444d]`,
    profileImage: `rounded-full h-[45px] w-[45px] object-cover`,
    postMain: `flex-1 px-4`,
    headerDetails: `flex items-center`,
    name: `font-bold mr-1`,
    verified: `text-[0.8rem]`,
    handleAndTimeAgo: `text-[#8899a6] ml-1`,
    tweet: `my-2`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
    footerIcon: `rounded-full text-lg p-2`,
}

const Post = ({
    displayName,
    userName,
    text,
    avatar,
    timestamp,
    isProfileImageNft,
}) => {
    return (
        <div className = {style.wrapper}>
            <div>
                <img
                src = {avatar}
                alt = {userName}
                className = {isProfileImageNft ? `${style.profileImage} smallHex`: style.profileImage}/>
            </div>

            <div className = {style.postMain}>
                <div>
                    <span className= {style.headerDetails}>
                        <span className= {style.name}>{displayName}</span>                            
                        {/* testing hardcoding to get the verified icon
                        {true && ( */}
                         {isProfileImageNft && (
                                <span className={style.verified}>
                                    <BsFillPatchCheckFill/>
                                </span>
                            )}                    
                        <span className={style.handleAndTimeAgo}>
                            @{userName} {'\u2022'} {format(new Date(timestamp).getTime())}
                        </span>
                    </span>
                    {/* accepting text input to be displayed */}
                    <div className = {style.tweet}>{text}</div> 
                </div>
                <div className = {style.footer}>
                    <div className = {`${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b] `}>
                        <FaRegComment/>
                    </div>
                    <div className = {`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}>
                        <FaRetweet/>
                    </div>
                    <div className = {`${style.footerIcon} hover:text-[#f91c80] hover:bg-[#39243c]`}>
                            <AiOutlineHeart/>
                    </div>
                    <div className = {`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}>
                        <FiShare/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;