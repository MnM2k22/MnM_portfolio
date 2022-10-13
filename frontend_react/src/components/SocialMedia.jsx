import React from 'react';
import { BsTwitter, BsInstagram, BsDiscord, BsWhatsapp } from 'react-icons/bs'
import {  FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { images }  from '../constants';


const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <a href='https://wa.me/message/KMM7DA6TMGDJE1'><BsWhatsapp /></a>
        </div>
        <div>
        <a href='https://www.twitter.com/mnm_2k22'><BsTwitter /></a>
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
        <a href='https://rumble.com/c/c-1995432'><img src={images.rumble}/></a>
        </div>
  </div>
  )
}

export default SocialMedia
