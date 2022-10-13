import React from 'react';
import { BsTwitter, BsInstagram, BsDiscord, BsWhatsapp } from 'react-icons/bs'
import {  FaFacebook, FaTiktok, FaYoutube, FaLinkedinIn, FaSpotify, FaWeibo, FaVk, FaVimeoV, FaTelegram, FaPatreon, FaMedium, FaPinterestP, FaTumblr } from 'react-icons/fa';
import { images }  from '../constants';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://wa.me/message/F6YZDMW4H7IDF1'><BsWhatsapp /></a>
        </div>
        <div>
        <a href='https://telegram.org'><FaTelegram /></a>
        </div>
        <div>
        <a href='https://www.facebook.com'><FaFacebook /></a>
        </div>
        <div>
        <a href='https://vk.com'><FaVk /></a>
        </div>
        <div>
        <a href='https://www.twitter.com/mnm_2k22'><BsTwitter /></a>
        </div>
        <div>
        <a href='https://weibo.com'><FaWeibo /></a>
        </div>
        <div>
        <a href='https://www.tumblr.com'><FaTumblr /></a>
        </div>
        <div>
        <a href='https://medium.com'><FaMedium /></a>
        </div>
        <div>
        <a href='https://www.instagram.com/mnm_2k22'><BsInstagram /></a>
        </div>
        <div>
        <a href='https://pinterest.com'><FaPinterestP /></a>
        </div>
        <div>
        <a href='https://www.youtube.com/channel/UC90sDilVDnaN3idFsIHL0pQ'><FaYoutube /></a>
        </div>
        <div>
        <a href='https://www.vimeo.com'><FaVimeoV /></a>
        </div>
        <div>
        <a href='https://rumble.com/c/c-1995432'><img src={images.rumble}/></a>
        </div>
        <div>
        <a href='https://www.patreon.com'><FaPatreon /></a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/mnm-team-788610253'><FaLinkedinIn /></a>
        </div>
        <div>
        <a href='https://discord.gg/kXvyQdAJ'><BsDiscord /></a>
        </div>
        <div>
        <a href='https://www.spotify.com'><FaSpotify /></a>
        </div>
  </div>
  )
}

export default SocialMedia
