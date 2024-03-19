// import { SiGitbook } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { FaReddit, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {AiFillInstagram} from 'react-icons/ai'

function SocialIcons() {
  return (
    <>
      <a
        href="#" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <AiFillInstagram />
      </a>
  
      <a
        href="https://t.me/keksoll" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://twitter.com/KekSolll" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaTwitter />
      </a>
 
    </>
  );
}

export default SocialIcons;
