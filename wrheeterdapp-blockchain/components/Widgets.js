//Widgets Components

import { React } from "react";
import { news, whoToFollow } from "../lib/newsStatic"; //importing news Library
import { BiSearch } from "react-icons/bi"; //search icon

const style = {
  wrapper: `flex-[1.1] p-3`,
  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] text-sm curson-pointer hover:bg-[#22303c]`,
  item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6]`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvataContainer: `w-1/5`,
  followAvatar: `rounded-full h-[35px] 2-[40px]`,
  profileDetails: `flex-1`,
  name: `font-semibold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
};

// creating widgets container to display different session
const Widgets = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.searchBar}>
        <BiSearch className={style.searchIcon} />
        <input
          type="text"
          placeholder="Lookup info here"
          className={style.inputBox}
        />
      </div>

      {/* Trending news section */}
      <div className={style.section}>
        <div className={style.title}>What is going on?</div>
        {news.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.newsItemLeft}>
              <div className={style.newsItemCategory}>{item.category}</div>
              <div className={style.newsItemTitle}>{item.title}</div>
            </div>
            <div className={style.newsItemRight}>
              <img
                src={item.image}
                alt={item.category}
                className={style.newsItemImage}
              />
            </div>
          </div>
        ))}

        <div className={style.showMore}>Show More Info</div>
      </div>

      {/* Who to follow section    */}
      <div className={style.section}>
        <div className={style.title}>Who to follow</div>
        {whoToFollow.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.followAvataContainer}>
              {/* image container */}
              <img
                src={item.avatar}
                alt={item.handle}
                className={style.followAvatar}
              />
            </div>
            <div className={style.profileDetails}>
              <div className={style.name}>{item.handle}</div>
              <div className={style.handle}>{item.name}</div>
            </div>
            <div className={style.followButton}>Follow</div>
          </div>
        ))}
        <div className={style.showMore}>Show More Accounts</div>
      </div>
    </div>
  );
}

export default Widgets;
