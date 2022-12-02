//Creating the Feed Session

import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

//creating tweets arrays to strore the tweets of a user
const tweets = [
  {
    displayName: "ThyTechGuy",
    userName: "0x002eFTEYDN73TA7UI218JNDT37JHMC1PA4f2xdf",
    avatar: "/images/myself.jpg",
    text: "I love Tech",
    isProfileImageNft: false,
    timestamp: "2022-12-02T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    displayName: "Alomi12",
    userName: "0x5F705C2C14DB585AF88D725A7C07F989019B8A31",
    avatar:
      "https://pyxis.nymag.com/v1/imgs/bc9/0a4/6b4606e999eaa3460cfa3035e33e3dc8db-chadwick-boseman-931925976.rsquare.w700.jpg",
    text: "The latest album vibes of Wizkid is great and can be tagged “The world’s greatest music”.",
    isProfileImageNft: false,
    timestamp: "2022-11-25T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    displayName: "Shola245",
    userName: "0xD435283C72B2DB9B8B3C2F806A61BDCE79020C96",
    avatar:
      "https://gradely.ng/wp-content/uploads/2022/01/portrait-african-girl-writing-solution-260nw-1078335890.jpg",
    text: "I’ve recently been doing more maths than usual using Roman numerals ",
    isProfileImageNft: false,
    timestamp: "2022-11-15T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    displayName: "Janet_store",
    userName: "0xA2C0E0972B14D2620D551ED265530A5B1BF8EA40",
    avatar:
      "https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg",
    text: "Varieties of my fashion line will launch soon",
    isProfileImageNft: false,
    timestamp: "2022-11-08T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    displayName: "Ola_tech",
    userName: "0xB8C8B104D86879B8FA1BE238DF426AA009BA80C1",
    avatar:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388",
    text: "A good pattern crops up a lot in computing - indirection. Blockchain has come to stay",
    isProfileImageNft: false,
    timestamp: "2022-10-12T12:00:00.000Z", // This is how sanity stores timestamp
  },
];

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />

      {/* looping through all tweets by mapping*/}
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          //slicing the username address to shorten the address
          userName={`${tweet.userName.slice(0, 6)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
