//importing profile details profile directory
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTweets from "../components/profile/ProfileTweets";

//importing from home directory
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

//creating profile component
import React  from "react";

const style = {
  // wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  wrapper: `flex justify-center select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  // mainContent: `flex-[2] border-r border-1 border-[#38444d] overflow-y-scroll`,
  mainContent: `flex-[2] border-l border-r  border-1 border-[#38444d]`,
};

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <div className={style.mainContent}>
          {/**Profile header */}
          <ProfileHeader />

          {/**Profile tweets */}
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default profile;
