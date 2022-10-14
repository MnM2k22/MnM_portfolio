import React from 'react';
import { BsTwitter, BsInstagram, BsDiscord, BsWhatsapp } from 'react-icons/bs';
import {  FaFacebook, FaYoutube, FaLinkedinIn, FaSpotify, FaVk, FaVimeoV, FaTelegram, FaPatreon, FaMedium, FaPinterestP, FaTumblr } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { images }  from '../constants';

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <a href='https://www.fiverr.com/mnm2k22'><SiFiverr /></a>
        </div>
        <div>
        <a href='https://www.upwork.com/freelancers/~019fb7899e9b692629'><SiUpwork /></a>
        </div>
        <div>
        <a href='https://wa.me/message/F6YZDMW4H7IDF1'><BsWhatsapp /></a>
        </div>
        <div>
        <a href='https://telegram.me/mnm_2k22'><FaTelegram /></a>
        </div>
        <div>
        <a href='https://vk.com/id755397428'><FaVk /></a>
        </div>
        <div>
        <a href='https://www.twitter.com/mnm_2k22'><BsTwitter /></a>
        </div>
        <div>
        <a href='https://www.tumblr.com/mnm-team'><FaTumblr /></a>
        </div>
        <div>
        <a href='https://medium.com/@mnm_2k22'><FaMedium /></a>
        </div>
        <div>
        <a href='https://www.instagram.com/mnm_2k22'><BsInstagram /></a>
        </div>
        <div>
        <a href='https://www.pinterest.com/mnm2k22'><FaPinterestP /></a>
        </div>
        <div>
        <a href='https://www.youtube.com/channel/UC90sDilVDnaN3idFsIHL0pQ'><FaYoutube /></a>
        </div>
        <div>
        <a href='https://vimeo.com/channels/1816871'><FaVimeoV /></a>
        </div>
        <div>
        <a href='https://rumble.com/c/c-1995432'><img src={images.rumble} alt=''/></a>
        </div>
        <div>
        <a href='https://www.patreon.com/user/creators?u=81116952'><FaPatreon /></a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/mnm-team-788610253'><FaLinkedinIn /></a>
        </div>
        <div>
        <a href='https://discord.gg/kXvyQdAJ'><BsDiscord /></a>
        </div>
        <div>
        <a href='https://open.spotify.com/user/31kgc4lhw2wtcsolw64nwueigsaa?si=TRi1AbcNQ_GeU5TZ3hyRTg&utm_source=whatsapp'><FaSpotify /></a>
        </div>
  </div>
  )
}

export default SocialMedia
