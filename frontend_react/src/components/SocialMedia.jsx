import React from 'react';
import { BsTwitter, BsInstagram, BsDiscord } from 'react-icons/bs'
import { FaFacebook, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href='https://www.twitter.com/mnm_2k22'><BsTwitter /></a>
        </div>
        <div>
        <a href='https://www.facebook.com'><FaFacebook /></a>
        </div>
        <div>
        <a href='https://www.instagram.com/mnm_2k22'><BsInstagram /></a>
        </div>
        <div>
        <a href='https://www.youtube.com/channel/UC90sDilVDnaN3idFsIHL0pQ'><FaYoutube /></a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/mnm-team-788610253'><FaLinkedinIn /></a>
        </div>
        <div>
        <a href='https://discord.gg/kXvyQdAJ'><BsDiscord /></a>
        </div>
        <div>
        <a href='https://www.tiktok.com'><FaTiktok /></a>
        </div>

  </div>
  )
}

export default SocialMedia