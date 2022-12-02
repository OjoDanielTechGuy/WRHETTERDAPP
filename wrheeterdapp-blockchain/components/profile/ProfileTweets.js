import Post from "../Post";
import React from "react";

//styling
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    userName: "0x002eFTEYDN73TA7UI218JNDT37JHMC1PA4f2xdf",
    avatar: "/images/myself.jpg",
    text: "I love Tech",
    isProfileImageNft: false,
    timestamp: "2022-12-02T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    userName: "0x002eFTEYDN73TA7UI218JNDT37JHMC1PA4f2xdf",
    avatar: "/images/myself.jpg",
    text: "Blockchain provides immediate, shared and completely transparent information",
    isProfileImageNft: false,
    timestamp: "2022-11-30T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    userName: "0x002eFTEYDN73TA7UI218JNDT37JHMC1PA4f2xdf",
    avatar: "/images/myself.jpg",
    text: "The blockchain was created by a person (or group of people) using the name (or pseudonym) Satoshi Nakamoto",
    isProfileImageNft: false,
    timestamp: "2022-11-28T12:00:00.000Z", // This is how sanity stores timestamp
  },

  {
    userName: "0x002eFTEYDN73TA7UI218JNDT37JHMC1PA4f2xdf",
    avatar: "/images/myself.jpg",
    text: "Glad to announce that I am currently an Intern with Grandida as a Blockchain Developer",
    isProfileImageNft: false,
    timestamp: "2022-11-24T12:00:00.000Z", // This is how sanity stores timestamp
  },
];

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {/* Looping through tweets */}
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName="ThyTechGuy"
          userName={`${tweet.userName.slice(0, 5)}...${tweet.userName.slice(
            -4
          )}`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
