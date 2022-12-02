// import { useContext, useEffect, useState } from "react";
// import { TwitterContext } from "../../context/TwitterContext";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-2.5rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  // profileImage: `object-cover rounded-full h-full`,
  profileImage: `object-cover rounded-full h-[80px] w-[80px]`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};

// //Header Section
const ProfileHeader = () => {
  // const { currentAccount, currentUser } = useContext(TwitterContext);
  const router = useRouter();

  const isProfileImageNft = false; //when set to true image becomes hexagon nft style
  const currentAccount = "0x002eFTEYDN73TA7UI218JNDT37JHMC1PA4f2xdf"; //43 alphanumeric

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push("/")} className={style.backButton}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>ThyTechGuy</div>
          <div className={style.secondary}>4 tweets</div>
        </div>
      </div>

      {/*attaching image as the cover*/}
      <div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQGp5IfLb-E7Pw/company-background_10000/0/1639280922207?e=1670335200&v=beta&t=NXDHEKoJFwrt8UWCBmK5r3e-MNGRWajNKMrWEFfCDV0"
          //1500x500(banner size)
          alt="Image Cover"
          className={style.coverPhoto}
        />
      </div>

      {/**container for nft or small icon image serving as profile section */}
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? "hex" : style.profileImageContainer}
        >
          <img
            src="/images/myself.jpg"
            alt="MyImage"
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>

      <div className={style.details}>
        <div>
          <div className={style.primary}>ThyTechGuy</div>
        </div>

        {/* Wallet Account Information */}
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 7)}...{currentAccount.slice(35)}
            </>
          )}
        </div>
      </div>

      {/* Navigation Bar Section*/}
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
