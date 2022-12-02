
//TweetBox Component
import {useState} from 'react';



//importing various icons
import {BsCardImage, BsEmojiSmile} from 'react-icons/bs' //imageicon && emoji smile
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri' 
import { IoMdCalendar } from 'react-icons/io' //calendar icon
import {MdOutlineLocationOn} from 'react-icons/md' //location icon

const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    // profileImage: `height-14 w-14 rounded-full`,
    profileImage: `rounded-full h-[65px] w-[65px] object-cover`,
    inputField: `w-full h-full outline-none bg-transparent text-small`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-5 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
}

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');

    //post tweet function and preventing default action
    const postTweet = (event) => {
        event.preventDefault();
        console.log(tweetMessage);
    }
    
    return (
        
              
        <div className = {style.wrapper}>
            <div className = {style.tweetBoxLeft}>
                <img
                //using an online image 
                src = "/images/myself.jpg"
                alt = "My-Profile-image"
                className = {style.profileImage}/>
            </div>

            <div className = {style.tweetBoxRight}>
                <form>
                    <textarea 
                        className = {style.inputField}
                        placeholder = "What's happening"
                        value = {tweetMessage}
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        >
                    </textarea>
                    
                    <div className = {style.formLowerContainer}>
                        <div className = {style.iconsContainer}>
                            <BsCardImage className = {style.icon}/>
                            <RiFileGifLine className = {style.icon}/>
                            <RiBarChartHorizontalFill className = {style.icon}/>
                            <BsEmojiSmile className = {style.icon}/>
                            <IoMdCalendar className ={style.icon}/>
                            <MdOutlineLocationOn className = {style.icon}/>
                        </div>
                        
                        <button
                        type = "submit"
                        disabled = {!tweetMessage}
                        onClick = {(event) => postTweet(event)}
                        className = {`${style.submitGeneral} 
                        ${tweetMessage ? style.activeSubmit : style.inactiveSubmit}`}>Tweet</button>

                     </div>
                     
                </form>
            </div>
        </div>
        
    )
}

export default TweetBox;